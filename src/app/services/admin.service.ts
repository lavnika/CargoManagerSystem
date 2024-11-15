import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin.model';


const baseurl= 'http://localhost:5146/api/Admin'

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  
   constructor(private http:HttpClient)
   { }
  
 addAdmin(data?:any):Observable<any>{
   console.log("*******");
   console.log(data);
    return this.http.post(baseurl+'/RegistrationOnSystem',data);
 }
ViewAdminDetails():Observable<Admin[]>
  {
    return this.http.get<Admin[]>(baseurl+'/GetAdminDetails');
  }
}
