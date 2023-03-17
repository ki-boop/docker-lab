import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing';
import { MainComponent } from './componets/main.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
