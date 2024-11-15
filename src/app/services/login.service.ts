import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
const AUTH_API ='http://localhost:5146/api/';
 
const httpOptions ={
  Headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private http:HttpClient) { }
 
  login(userId: string, password: string,role : string): Observable<any> {
    return this.http.post(
      AUTH_API + 'Login',
      {
        userId,
        password,
        role
      },
    );
  }
 
  register(userId: string, email: string, password: string,role:string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        userId,
        password,
        role
      },
     
    );
  }
}
