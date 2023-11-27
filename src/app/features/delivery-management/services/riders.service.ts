import { Injectable } from '@angular/core';
import {RiderDTO} from "../data-access/dto/rider.dto";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RidersService {
  private readonly apiUrl = 'https://exam.development.cafler.com/riders';

  constructor(private http: HttpClient) {}

  getAll(): Observable<RiderDTO[]> {

    //TODO finish
    return this.http.get<RiderDTO[]>(this.apiUrl);
  }
}
