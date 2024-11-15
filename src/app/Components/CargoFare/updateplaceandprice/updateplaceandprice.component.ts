import { Component } from '@angular/core';
import { CargoFare } from '../../../models/cargo-fare.model';
import { CargoFareService } from '../../../services/cargo-fare.service';

@Component({
  selector: 'app-updateplaceandprice',
  templateUrl: './updateplaceandprice.component.html',
  styleUrl: './updateplaceandprice.component.css'
})
export class UpdateplaceandpriceComponent {
  constructor(private service:CargoFareService) {}

  
 
  ngOnInit(): void {
    this.getCargoFareById();
 

  }
  userInputId?:number
  
  cargoFareData:CargoFare={
 
    cargoFareID:0,
    sourceLocation:'',
    destinationLocation: '',
    weight: 0,
    volume: 0,
    modeOfTransport: '',
    // shippingDate: Date,
    // arrivalDate: Date,
    fareAmount: 0,
    additionalCharges: 0,
    totalAmount: 0,
    cargoOrderId: 0
 
  }
 
getCargoFareById(): void {
    // Check if userInputId is valid before making the request
    if (this.userInputId !== null) {
      this.service.getCargoFareById(this.userInputId).subscribe({
        next: (data) => {
          this.cargoFareData = data;
          console.log('CargoFare details:', this.cargoFareData);
          // Add any additional logic you need after getting the details
        },
        error: (error) => {
          console.error('Error getting Cargo Fare details', error);
          // Handle the error as needed
        },
      });
    } else {
      console.warn('User input for CargoFareId is invalid.');
      // You may want to inform the user or take other actions for an invalid input
    }
  }

  updateCargoFarePlaceAndPrice(): void{
 
    // Check if userInputId is valid before making the update
   if (this.userInputId) {


     this.service.updateCargoFarePlaceAndPrice(this.cargoFareData).subscribe(
       (response) => {
         console.log('CargoFare updated successfully:', response);
         // You can add further handling or navigation logic here
       },
       (error) => {
         console.error('Error updating CargoFare:', error);
         // Handle error as needed
       }
     );
   }

}
}
