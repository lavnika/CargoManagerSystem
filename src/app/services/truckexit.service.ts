import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TruckexitService {

  constructor(private http:HttpClient) { }

  // MarkTruckExit(data?:any):Observable<any>{
  //   console.log("*******");
  //   console.log(data);
  //    return this.http.post('');
  // }
}
