export class LessonFilterDto {
  searchString?: string;
  sortType: LessonsSortType;
  pageSize: number;
  countPage: number;
}

export class CreateLessonDto {
  name: string;
  subject: string;
  dateOfStart: string;
  dateOfEnd: string;
  description: string;
  title: string;
  teacher?: string;
  image?: string;
}

export enum LessonsSortType {
  POPULAR = "POPULAR",
  NEW = "NEW",
  CLOSING_SOON = "CLOSING_SOON",
  OPENIMG_SOON = "OPENIMG_SOON",
}
