import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DeliveryManagementService {
  constructor(private http: HttpClient) {}

  updateRoutes(routes: any[]): Observable<any> {
    console.log(routes);
    return this.http.post(`${environment.apiBaseUrl}/route-updated`, routes);
  }
}
