import { Injectable } from '@angular/core';
import { BaseHttpClientService } from '../../../core/service/base-http-clent.service';
@Injectable({
  providedIn: 'root',
})
export class CatalogService extends BaseHttpClientService {
  getList() {
    return this.get('users');
  }
}
