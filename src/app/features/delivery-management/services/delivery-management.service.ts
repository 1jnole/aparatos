import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OptimizedRouteDTO } from '../data-access/dto/optimized-route.dto';

@Injectable({ providedIn: 'root' })
export class DeliveryManagementService {
  private apiUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  getOptimizedRoutes(): Observable<OptimizedRouteDTO[]> {
    return this.http.get<OptimizedRouteDTO[]>(
      `${this.apiUrl}/optimized-routes`
    );
  }

  updateRoute(
    routeId: string,
    updatedRouteData: OptimizedRouteDTO
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/route-updated`, updatedRouteData);
  }
}
