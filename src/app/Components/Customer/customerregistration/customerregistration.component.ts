import { Component } from '@angular/core';
import { Customer } from '../../../models/customer.model';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrl: './customerregistration.component.css'
})
export class CustomerregistrationComponent {

  constructor(private service:CustomerService) {}

  customerdata:Customer={

    customerId:0,
    firstName :'',
    lastName:'',
    username:'',
    password:'',
    role:'',
    email:'',
    address:'',
    phoneNo:''
   
  }

  addCustomer():void{
    var data = {
      EmployeeId:this.customerdata.customerId,
      FirstName:this.customerdata.firstName,
      LastName:this.customerdata.lastName,
      Username:this.customerdata.username,
      Password:this.customerdata.password,
      Role:this.customerdata.role,
      Email:this.customerdata.email,
      Address:this.customerdata.address,
      PhoneNo:this.customerdata.phoneNo
    };
 
    this.service.addCustomer(data).subscribe({
      next:(msg) =>{
        console.log(msg);
      },
      error:(err) =>{
        alert(err)
        console.log(err);
      }
    });
  }
}
