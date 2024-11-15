import { Component,OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-viewemployeedetails',
  templateUrl: './viewemployeedetails.component.html',
  styleUrl: './viewemployeedetails.component.css'
})
export class ViewemployeedetailsComponent implements OnInit {

  employeelist?:Employee[];
  constructor(private service:EmployeeService ) {}

  ngOnInit(): void {
    this.GetEmployeeDetails();
    // Example: No initial update on ngOnInit, you may choose to do so based on your requirements
  
  }

  GetEmployeeDetails():void{
    this.service.getEmployee().subscribe({
      next:(data)=>{
        this.employeelist=data;
      },
      error:(error)=>{
        alert(error.message)
      }
    });
  
   }
 

}
