import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserDocument } from "src/users/user.model";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import * as uuid from "uuid";
import { MailService } from "./mail.service";
import { TokenService } from "./token.service";
import { UserDto } from "dtos/user.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel("User") private userModel: Model<UserDocument>,
    private mailService: MailService,
    private tokenService: TokenService
  ) {}

  async registration(email: string, password: string) {
    const candidate = await this.userModel.findOne({ email });
    if (candidate) {
      return new HttpException(
        `Пользователь с почтовым адресом ${email} уже существует.`,
        HttpStatus.BAD_REQUEST
      );
    } else {
      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = uuid.v4();
      const user = await this.userModel.create({
        email: email,
        password: hashPassword,
        activationLink: activationLink,
      });
      await this.mailService.sendActivationMail(
        email,
        `${process.env.API_URL}/auth/activate/${activationLink}`
      );

      const userDto = new UserDto(user);
      const tokens = this.tokenService.generateTokens({ ...userDto });
      await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

      return {
        ...tokens,
        user: userDto,
      };
    }
  }

  async auth() {}

  async logout() {}

  async activate(activationLink: string) {
    const user = await this.userModel.findOne({
      activationLink: activationLink,
    });
    if (!user)
      return new HttpException(
        `Некорректная ссылка активации`,
        HttpStatus.NOT_FOUND
      );

    user.isActivated = true;
    await user.save();
  }

  async refresh() {}
}
