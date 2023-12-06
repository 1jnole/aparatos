import { environment } from '../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RiderModel } from '../../domain/interfaces/rider-model.interface';

@Injectable({ providedIn: 'root' })
export class RidersService {
  constructor(private http: HttpClient) {}

  getRiders(): Observable<RiderModel[]> {
    return this.http.get<RiderModel[]>(`${environment.apiBaseUrl}/riders`);
  }
}
