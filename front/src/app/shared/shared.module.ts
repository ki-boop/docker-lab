import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './componetns/logo/logo.component';

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [],
  exports: [LogoComponent],
})
export class SharedModule {}
