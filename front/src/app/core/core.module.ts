import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WebSocketService } from './service/websocket.service';
import { CommonLayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CommonLayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, SharedModule],
  providers: [WebSocketService],
})
export class CoreModule {}
