import { Injectable } from "@nestjs/common";
import * as jwt from "jsonwebtoken";
import { TokenDocument } from "./dto/token.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class TokenService {
  constructor(
    @InjectModel("Token") private tokenSchema: Model<TokenDocument>
  ) {}

  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESSS_SECRET, {
      expiresIn: "30m",
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId: string, refreshToken: string) {
    const tokenData = await this.tokenSchema.findOne({ user: userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await this.tokenSchema.create({ user: userId, refreshToken });
    return token;
  }
}
