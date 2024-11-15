import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Housekeeping } from '../models/housekeeping.model';

@Injectable({
  providedIn: 'root'
})
export class HousekeepingService {

  constructor(private http:HttpClient) { }

  getHouseKeepingMovement():Observable<Housekeeping[]>
 {
   return this.http.get<Housekeeping[]>('http://localhost:5146/api/Admin/HouseKeepingDetails');
 }
}
