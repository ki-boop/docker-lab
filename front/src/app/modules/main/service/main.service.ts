import { Injectable } from '@angular/core';
import { BaseHttpClientService } from '../../../core/service/base-http-clent.service';
@Injectable({
  providedIn: 'root',
})
export class MainService extends BaseHttpClientService {
  getMachines() {
    return this.get('');
  }
}
