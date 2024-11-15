import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from '../models/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http:HttpClient) { }

  getWareHouseDetails():Observable<Warehouse[]>
 {
   return this.http.get<Warehouse[]>('http://localhost:5146/api/Admin/WareHouseDetails');
 }
}
