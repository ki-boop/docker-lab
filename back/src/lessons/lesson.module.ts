import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LessonSchema } from "./lesson.model";
import { LessonsController } from "./lesson.controller";
import { LessonsService } from "./lesson.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Lessons", schema: LessonSchema }]),
  ],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}
