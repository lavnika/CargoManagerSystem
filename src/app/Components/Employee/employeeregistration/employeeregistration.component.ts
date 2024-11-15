import { Component } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrl: './employeeregistration.component.css'
})
export class EmployeeregistrationComponent {
  
  constructor(private service:EmployeeService) {}

  employeedata:Employee={
    firstName :'',
    lastName:'',
    username:'',
    password:'',
    role:'',
    email:'',
    address:'',
    phoneNo:''
  }

  addEmployee():void{
    var data = {
      // EmployeeId:this.employeedata.employeeId,
      FirstName:this.employeedata.firstName,
      LastName:this.employeedata.lastName,
      Username:this.employeedata.username,
      Password:this.employeedata.password,
      Role:this.employeedata.role,
      Email:this.employeedata.email,
      Address:this.employeedata.address,
      PhoneNo:this.employeedata.phoneNo
    };

    this.service.addEmployee(data).subscribe({
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
