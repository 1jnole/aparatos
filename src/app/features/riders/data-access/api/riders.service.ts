import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { RiderModel } from '../../domain/interfaces/rider-model.interface';
@Injectable({
  providedIn: 'root'
})
export class RidersService {
  constructor(private http: HttpClient) {}

  getRiders(): Observable<RiderModel[]> {
    return this.http
      .get<RiderModel[]>(environment.apiBaseUrl + '/riders')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      () => new Error('Error al obtener los datos de los repartidores')
    );
  }
}
