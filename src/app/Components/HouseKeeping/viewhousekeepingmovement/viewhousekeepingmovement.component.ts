import { Component } from '@angular/core';
import { Housekeeping } from '../../../models/housekeeping.model';
import { HousekeepingService } from '../../../services/housekeeping.service';

@Component({
  selector: 'app-viewhousekeepingmovement',
  templateUrl: './viewhousekeepingmovement.component.html',
  styleUrl: './viewhousekeepingmovement.component.css'
})
export class ViewhousekeepingmovementComponent {

  constructor(private service:HousekeepingService) {}
  housekeepinglist?:Housekeeping[];

  houseData:Housekeeping ={
    housekeepingMovementId: 0,
    cargoBookingId: 0,
    movementDate: new Date(),
    wareHouseID: 0
  }
  getHouseKeepingMovement(): void {
    var MovementData = {
      housekeepingMovementId: this.houseData.housekeepingMovementId,
      cargoBookingId: this.houseData.cargoBookingId,
      movementDate: this.houseData.movementDate,
      wareHouseID: this.houseData.wareHouseID
    };
  }
  getHouseKeepingdata():void{
    this.service.getHouseKeepingMovement().subscribe({
      next: (MovementData) => {
        this.housekeepinglist=MovementData;
      },
      error: (err) => {
        alert(err);
        console.log(err.message);
      }
    });
  }

}
