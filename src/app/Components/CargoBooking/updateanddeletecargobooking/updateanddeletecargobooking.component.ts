import { Component } from '@angular/core';
import { Cargobooking } from '../../../models/cargobooking.model';
import { CargobookingService } from '../../../services/cargobooking.service';

@Component({
  selector: 'app-updateanddeletecargobooking',
  templateUrl: './updateanddeletecargobooking.component.html',
  styleUrl: './updateanddeletecargobooking.component.css'
})
export class UpdateanddeletecargobookingComponent {
  constructor(private service: CargobookingService) {}

  cargoBookingdata:Cargobooking={

    cargoBookingId: 0,
    cargoFareID: 0,
    cargoorderid: 0,
    bookingDate: new Date(),
    bookingStatus:''
  
    }
  userInputcargoBookingId?: number=0;
  getCargoBookingId(): void {
    // Check if userInputId is valid before making the request
    if (this.userInputcargoBookingId) {
      this.service.getCargoBookingById(this.userInputcargoBookingId).subscribe({
        next: (data) => {
          this.cargoBookingdata = data;
          console.log('CargoOrder Details:',this.cargoBookingdata);
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
    if (this.userInputcargoBookingId) {
      const updatedData = {
        CargoBookingId:this.cargoBookingdata.cargoBookingId,
      CargoFareID:this.cargoBookingdata.cargoFareID,
      cargoorderid :this.cargoBookingdata.cargoorderid,
      BookingDate:this.cargoBookingdata.bookingDate,
      BookingStatus:this.cargoBookingdata.bookingStatus
        
      };
 
      this.service.updateCargoOrderById(updatedData).subscribe({
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

  deleteCargoBookingById(): void {
      // Check if userInputId is valid before making the request
      if (this.userInputcargoBookingId) {
        this.service.DeleteCargoBookingById(this.userInputcargoBookingId).subscribe({
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
