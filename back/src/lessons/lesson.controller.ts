import { Controller, Post, Body, Get } from "@nestjs/common";
import { LessonsService } from "./lesson.service";
import { LessonFilterDto } from "./dto/lesson.dto";

@Controller("lessons")
export class LessonsController {
  constructor(private lessonsService: LessonsService) {}

  @Post("search-by-filter")
  getFiltratedLessons(@Body() lessonDto: LessonFilterDto) {
    return this.lessonsService.getFiltratedLessons(lessonDto);
  }

  @Post("create")
  createLesson(@Body() lessonDto: any) {
    return this.lessonsService.createLesson(lessonDto);
  }
}
