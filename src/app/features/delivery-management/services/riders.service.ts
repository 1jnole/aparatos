import { Injectable } from '@angular/core';
import { RiderDTO } from '../data-access/dto/rider.dto';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RidersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<RiderDTO[]> {
    return this.http
      .get<RiderDTO[]>(environment.apiBaseUrl + '/riders')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      () => new Error('Error al obtener los datos de los repartidores')
    );
  }
}
