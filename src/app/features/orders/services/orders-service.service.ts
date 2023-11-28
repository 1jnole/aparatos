import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OrderDTO } from '../data-access/dto/order.dto';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<OrderDTO[]> {
    return this.http.get<OrderDTO[]>(`${environment.apiBaseUrl}/orders`);
  }
}
