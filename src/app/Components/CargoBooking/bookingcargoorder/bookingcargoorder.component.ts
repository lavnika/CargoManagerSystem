import { Component } from '@angular/core';
import { Cargobooking } from '../../../models/cargobooking.model';
import { CargobookingService } from '../../../services/cargobooking.service';

@Component({
  selector: 'app-bookingcargoorder',
  templateUrl: './bookingcargoorder.component.html',
  styleUrl: './bookingcargoorder.component.css'
})
export class BookingcargoorderComponent {

constructor(private service:CargobookingService) {}

cargoBookingdata:Cargobooking={

  cargoBookingId: 0,
  cargoFareID: 0,
  cargoorderid: 0,
  bookingDate: new Date(),
  bookingStatus:''

  }

  AddCargoBooking():void{
    var data = {
      CargoBookingId:this.cargoBookingdata.cargoBookingId,
      CargoFareID:this.cargoBookingdata.cargoFareID,
      cargoorderid :this.cargoBookingdata.cargoorderid,
      BookingDate:this.cargoBookingdata.bookingDate,
      BookingStatus:this.cargoBookingdata.bookingStatus
      
    };
    this.service.addCargoBooking(data).subscribe({
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
