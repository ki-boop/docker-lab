import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public mainService: MainService, private http: HttpClient) {}
  ngOnInit(): void {
    this.mainService.getMachines().subscribe();
  }
}
