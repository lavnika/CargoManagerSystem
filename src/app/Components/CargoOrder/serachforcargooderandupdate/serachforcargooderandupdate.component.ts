import { Component } from '@angular/core';
import { Cargoorder } from '../../../models/cargoorder.model';
import { CargoorderService } from '../../../services/cargoorder.service';

@Component({
  selector: 'app-serachforcargooderandupdate',
  templateUrl: './serachforcargooderandupdate.component.html',
  styleUrl: './serachforcargooderandupdate.component.css'
})
export class SerachforcargooderandupdateComponent {

  constructor(private service: CargoorderService) {}
  cargodata:Cargoorder={
    cargoOrderId:0,
    customerId:0,
    cargoTypeId:0,
    orderDate: new Date(),
    status: '',
    location:'',
    quantity: 0,
    productId:0

  }
  userInputcargoId?: number;
  getCargoOrdderById(): void {
    // Check if userInputId is valid before making the request
    if (this.userInputcargoId) {
      this.service.getCargoOrderById(this.userInputcargoId).subscribe({
        next: (data) => {
          this.cargodata = data;
          console.log('CargoOrder Details:',this.cargodata);
          // Add any additional logic you need after getting the details
        },
        error: (error) => {
          console.error('Error getting cargoOrder details', error);
          // Handle the error as needed
        },
      });
    } else {
      console.warn('User input for employeeId is invalid.');
      // You may want to inform the user or take other actions for an invalid input
    }
  }
  updateCargoOrder(): void {
    // Check if userInputId is valid before making the update
    if (this.userInputcargoId) {
      const updatedData = {
        CargoOrderId:this.cargodata.cargoOrderId,
        CustomerId:this.cargodata.customerId,
        CargoTypeId:this.cargodata.cargoTypeId,
        OrderDate:this.cargodata.orderDate,
        Status:this.cargodata.status,
        Location:this.cargodata.location,
        Quantity:this.cargodata.quantity,
        ProductId:this.cargodata.productId,
        
      };
 
      this.service.updateCargoOrder(updatedData).subscribe({
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
}
