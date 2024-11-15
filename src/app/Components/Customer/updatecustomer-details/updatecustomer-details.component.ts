import { ThisReceiver } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.model';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-updatecustomer-details',
  templateUrl: './updatecustomer-details.component.html',
  styleUrl: './updatecustomer-details.component.css'
})



export class UpdatecustomerDetailsComponent implements OnInit {

  constructor(private service:CustomerService) {}

  ngOnInit(): void {
    this.updateCustomer();
  }

  userInputId?: number;
  customerDetails:Customer={
    
    customerId:0,
    firstName: '',
    lastName: '',
    username: '',
    role:'',
    password: '',
    email: '',
    address: '',
    phoneNo: ''
  };
 

  getCustomerById(): void {
    // Check if userInputId is valid before making the request
    if (this.userInputId !== null) {
      this.service.getCustomerById(this.userInputId).subscribe({
        next: (data) => {
          this.customerDetails = data;
          console.log('Customer details:',this.customerDetails);
          // Add any additional logic you need after getting the details
        },
        error: (error) => {
          console.error('Error getting customer details', error);
          // Handle the error as needed
        },
      });
    } else {
      console.warn('User input for customerId is invalid.');
      // You may want to inform the user or take other actions for an invalid input
    }
  }

  updateCustomer(): void {
    // Check if userInputId is valid before making the update
    if (this.userInputId) {
    
    const updatedData = {
    CustomerId:this.customerDetails.customerId,
    FirstName: this.customerDetails.firstName,
    LastName: this.customerDetails.lastName,
    Username: this.customerDetails.username,
    Password: this.customerDetails.password,
    Role:this.customerDetails.role,
    Email:this.customerDetails.email,
    Address:this.customerDetails.address,
    PhoneNo:this.customerDetails.phoneNo
      };
 
      this.service.updateCustomer(updatedData).subscribe({
        next: (response) => {
          console.log('Customer updated successfully', response);
          // Add any additional logic you need after the update
        },
        error: (error) => {
          console.error('Error updating customer', error);
          // Handle the error as needed
        },
      });
    } else {
      console.warn('User input for customerId is invalid.');
     
    }

}
}
