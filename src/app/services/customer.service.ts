import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

const baseurl='http://localhost:5146/api/Customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient)
  { }
 
addCustomer(data?:any):Observable<any>{
  console.log("*******");
  console.log(data);
   return this.http.post(baseurl + '/AddCustomer',data);
}
 
//get list of all customers
getCustomer():Observable<Customer[]>
{
  return this.http.get<Customer[]>(baseurl+'/GetCustomerDetails');
}
 
updateCustomer(updatedData: any): Observable<any> {
  return this.http.put(baseurl+'/UpdateCustomerDeatails',updatedData);
}

getCustomerById(id:any): Observable<Customer>
 {
  return this.http.get<Customer>(baseurl+'/GetCustomerById?customerId='+id);
 }
 
}
