import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../service/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  constructor(private catalogService: CatalogService) {}
  ngOnInit(): void {
    this.catalogService.getList().subscribe((data) => {
      console.log(data);
    });
  }
}
