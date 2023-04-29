import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing';
import { MainComponent } from './componets/main.component';
import { CommonModule } from '@angular/common';
import { CatalogModule } from '../catalog/catalog.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, CatalogModule],
})
export class MainModule {}
