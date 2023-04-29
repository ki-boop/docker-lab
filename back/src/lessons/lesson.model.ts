import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  subject: string; // TODO create list of Subjects

  @Prop({ default: new Date().getDate().toString() })
  dateOfStart: string;

  @Prop()
  dateOdEnd: string;

  @Prop({ default: 0 })
  countOfUsers: number;

  @Prop()
  description: string;

  @Prop()
  title: string;

  @Prop()
  teacher: string; // TODO Teacher class

  @Prop()
  image: string; // TODO FileService image
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
