import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RouteModel } from '../../../routes/domain/interfaces/route.interface';

@Injectable({ providedIn: 'root' })
export class DeliveryManagementService {
  constructor(private http: HttpClient) {}

  updateRoutes(routes: RouteModel[]): Observable<RouteModel[]> {
    return this.http.post<RouteModel[]>(
      `${environment.apiBaseUrl}/route-updated`,
      routes
    );
  }
}
