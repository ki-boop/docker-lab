export class LessonModel {
  name: string;
  subject: string;
  dateOfStart: string;
  dateOfEnd: string;
  description: string;
  title: string;
  teacher?: string;
  image?: string;

  constructor(source: any) {
    this.image = source.image;
    this.subject = source.subject;
    this.dateOfStart = source.dateOfStart;
    this.dateOfEnd = source.dateOfEnd;
    this.description = source.description;
    this.title = source.title;
    this.name = source.name;
  }
}
