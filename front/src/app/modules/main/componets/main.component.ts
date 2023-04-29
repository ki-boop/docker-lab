import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getList().subscribe();
  }
}
