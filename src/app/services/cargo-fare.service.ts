import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CargoFare } from '../models/cargo-fare.model';

@Injectable({
  providedIn: 'root'
})
export class CargoFareService {

  constructor(private http:HttpClient) { }

getSearchForAddress():Observable<CargoFare[]>
 {
   return this.http.get<CargoFare[]>('http://localhost:5146/api/Admin/SearchForAddress');
 }
 updatePlacePrice(updatedData: any): Observable<any> {
  return this.http.put('',updatedData  );
}
getCargoFareById(id:any): Observable<CargoFare>
 {
  return this.http.get<CargoFare>('http://localhost:5146/api/Employee/SearchForCargoFare?cargofareid='+id);
 }
 calculateCargoPrice(data?:any):Observable<any>{
  console.log("*******");
  console.log(data);
   return this.http.post('http://localhost:5146/api/Admin/CalculationcargoPrice',data);
}
updateCargoFarePlaceAndPrice(updatedCargoFareData: any): Observable<any>{
  return this.http.put('http://localhost:5146/api/Admin/UpdatePlaceAndPrice', updatedCargoFareData);
 }
}
