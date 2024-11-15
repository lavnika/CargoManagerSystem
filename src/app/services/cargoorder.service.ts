import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargoorder } from '../models/cargoorder.model';

@Injectable({
  providedIn: 'root'
})
export class CargoorderService {


  baseurl='http://localhost:5146/api/Employee'

  constructor(private http:HttpClient) { }

  addCorgoOrders(data:any):Observable<any>{
    return this.http.post(this.baseurl+'/BookingCargoOrder',data);
  }
  getCargoOrderById(id:any): Observable<Cargoorder>
 {
  return this.http.get<Cargoorder>(this.baseurl+'/GetCargoOrderById?id='+id);
 }
 updateCargoOrder(updatedData: any): Observable<any> {
  return this.http.put(this.baseurl+'/UpdateCargoOrderById',updatedData  );
}
// DeleteCargoOrder(id:any):Observable<any>
//  {
//   return this.http.delete(this.baseurl+'/='+id);
//  }
}
