import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { OrderDTO } from '../../domain/dto/order.dto';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<OrderDTO[]> {
    return this.http
      .get<OrderDTO[]>(`${environment.apiBaseUrl}/orders`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      () => new Error('Error al obtener los datos de los repartidores')
    );
  }
}
