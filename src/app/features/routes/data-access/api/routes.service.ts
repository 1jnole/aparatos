import { RouteModel } from '../../domain/interfaces/route.interface';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoutesService {
  private apiUrl = `${environment.apiBaseUrl}/optimized-routes`;

  constructor(private http: HttpClient) {}

  getRoutes(): Observable<RouteModel[]> {
    return this.http.get<RouteModel[]>(this.apiUrl);
  }
}
