import { Component } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-updateanddeleteemployeedetails',
  templateUrl: './updateanddeleteemployeedetails.component.html',
  styleUrl: './updateanddeleteemployeedetails.component.css'
})
export class UpdateanddeleteemployeedetailsComponent {

  constructor(private service:EmployeeService) {}
  userInputId?: number;
  employeeDetails:Employee={
    employeeId:0,
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role:'',
    email: '',
    address: '',
    phoneNo: ''
  };

  getEmployeeDetailsById(): void {
    // Check if userInputId is valid before making the request
    if (this.userInputId) {
      this.service.getEmployeeById(this.userInputId).subscribe({
        next: (data) => {
          this.employeeDetails = data;
          console.log('Employee details:',this.employeeDetails);
          // Add any additional logic you need after getting the details
        },
        error: (error) => {
          console.error('Error getting employee details', error);
          // Handle the error as needed
        },
      });
    } else {
      console.warn('User input for employeeId is invalid.');
      // You may want to inform the user or take other actions for an invalid input
    }
  }

  updateEmployee(): void {
    // Check if userInputId is valid before making the update
    if (this.userInputId) {
      const updatedData = {
    EmployeeId:this.employeeDetails.employeeId,
    FirstName: this.employeeDetails.firstName,
    LastName: this.employeeDetails.lastName,
    Username: this.employeeDetails.username,
    Password: this.employeeDetails.password,
    Role:this.employeeDetails.role,
    Email:this.employeeDetails.email,
    Address:this.employeeDetails.address,
    PhoneNo:this.employeeDetails.phoneNo
      };
 
      this.service.updateEmployee(updatedData).subscribe({
        next: (response) => {
          console.log('Employee updated successfully', response);
          // Add any additional logic you need after the update
        },
        error: (error) => {
          console.error('Error updating employee', error);
          // Handle the error as needed
        },
      });
    } else {
      console.warn('User input for employeeId is invalid.');
      // You may want to inform the user or take other actions for an invalid input
    }
  }

  deleteEmployeeById(): void {
    // Check if userInputId is valid before making the request
    if (this.userInputId) {
      this.service.DeleteEmployee(this.userInputId).subscribe({
        next: (response) => {
          console.log('Employee deleted successfully', response);
          // Add any additional logic you need after the deletion
        },
        error: (error) => {
          console.error('Error deleting employee', error);
          // Handle the error as needed
        },
      });
    } else {
      console.warn('User input for employeeId is invalid.');
      // You may want to inform the user or take other actions for an invalid input
    }
  }

}
