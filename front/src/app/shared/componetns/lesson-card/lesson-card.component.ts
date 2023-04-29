import { Component, Input } from '@angular/core';
import { LessonModel } from 'src/app/core/model/lesson.model';

@Component({
  selector: 'app-lesson-card',
  templateUrl: 'lesson-card.component.html',
  styleUrls: ['lesson-card.component.scss'],
})
export class LessonCardComponent {
  @Input() lesson: LessonModel | null = null;
}
