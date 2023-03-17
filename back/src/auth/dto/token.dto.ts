import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TokenDocument = HydratedDocument<Token>;
@Schema()
export class Token {
  @Prop()
  id: string;

  @Prop()
  userId: string;

  @Prop({ required: true })
  refreshToken: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
