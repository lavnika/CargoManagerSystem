import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatepassService {

  constructor(private http:HttpClient) { }

  GenerateGatePass(data?:any):Observable<any>{
    console.log("*******");
    console.log(data);
     return this.http.post('http://localhost:5146/api/Admin/GeneratePassKey',data);
  }
}
