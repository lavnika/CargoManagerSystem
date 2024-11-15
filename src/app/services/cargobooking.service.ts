import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargobooking } from '../models/cargobooking.model';

@Injectable({
  providedIn: 'root'
})
export class CargobookingService {

  baseUrl='http://localhost:5146/api/Admin/BookingCargo'
  baseurl1='http://localhost:5146/api/Admin'

  constructor(private http:HttpClient) { }

  addCargoBooking(data?:any):Observable<any>{
    console.log("*******");
    console.log(data);
     return this.http.post(this.baseUrl,data);
  }
  GetAllcargoBookingDetails():Observable<Cargobooking[]>
  {
   return this.http.get<Cargobooking[]>(this.baseurl1+'/ViewStatusOfCargo');
 }
 getCargoBookingById(id:any): Observable<Cargobooking>
 {
  return this.http.get<Cargobooking>(this.baseurl1+'/GetCargoBookingById?Id='+id);
 }
 updateCargoOrderById(updatedData: any): Observable<any> {
  return this.http.put(this.baseurl1+'/UpdateCargoBooking',updatedData);
}

DeleteCargoBookingById(id:any):Observable<any>
{
  return this.http.delete(this.baseurl1+'/CancelCargo?cargoorderid='+id);
}
}
