import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Lesson, LessonDocument } from "./lesson.model";
import { CreateLessonDto, LessonFilterDto } from "./dto/lesson.dto";

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel("Lesson") private lessonModel: Model<LessonDocument>
  ) {}

  async createLesson(dto: CreateLessonDto) {
    const lesson = this.lessonModel.create(dto);
    return lesson;
  }

  async getFiltratedLessons(dto: LessonFilterDto) {
    const lessons = await this.lessonModel.find();
    return lessons;
  }
}
