import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouteDTO } from '../../../routes/domain/dto/routes.dto';
import { environment } from '../../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  constructor(private http: HttpClient) {}

  updateRoute(route: RouteDTO): Observable<RouteDTO> {
    return this.http.post<RouteDTO>(
      `${environment.apiBaseUrl}/route-updated`,
      route
    );
  }
}
