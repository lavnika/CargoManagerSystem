import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl1='http://localhost:5146/api/Admin';
 baseUrl='http://localhost:5146/api/Admin/RegisterNewEmployee';

  constructor(private http:HttpClient) 
  { }

addEmployee(data?:any):Observable<any>{
  console.log("*******");
  console.log(data);
   return this.http.post(this.baseUrl,data);
}
getEmployee():Observable<Employee[]>
{
  return this.http.get<Employee[]>(this.baseUrl1+'/GetEmployeeDetails');
}
 DeleteEmployee(id:any):Observable<any>
{
  return this.http.delete(this.baseUrl1+'/DeleteExistingEmployee?employeeid='+id);
}
updateEmployee(updatedData: any): Observable<any> {
  return this.http.put(this.baseUrl1+'/UpdateEmployee',updatedData  );
}
getEmployeeById(id:any): Observable<Employee>
 {
  return this.http.get<Employee>(this.baseUrl1+'/GetEmployeeById?id='+id);
 }
}
