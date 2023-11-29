import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../../environments/environment';
import { RouteDTO } from '../../domain/dto/routes.dto';
import { RouteModel } from '../../domain/interfaces/route.interface';

@Injectable({ providedIn: 'root' })
export class RoutesService {
  private apiUrl = `${environment.apiBaseUrl}/optimized-routes `;

  constructor(private http: HttpClient) {}

  getRoutes(): Observable<RouteModel[]> {
    return this.http.get<RouteDTO[]>(this.apiUrl);
  }

  /* updateRoute(route: Route): Observable<Route> {
    return this.http.put<Route>(`${this.apiUrl}/${route.id}`, route);
  } */
}
