import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "src/users/user.model";
import { AuthController } from "./auth.contoller";
import { AuthService } from "./auth.service";
import { TokenSchema } from "./dto/token.dto";
import { MailService } from "./mail.service";
import { TokenService } from "./token.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Token", schema: TokenSchema }]),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [TokenService, MailService, AuthService],
})
export class AuthModule {}
