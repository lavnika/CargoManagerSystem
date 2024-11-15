import { Component } from '@angular/core';
import { TruckExit } from '../../../models/truck-exit.model';
import { TruckexitService } from '../../../services/truckexit.service';

@Component({
  selector: 'app-marktruckexit',
  templateUrl: './marktruckexit.component.html',
  styleUrl: './marktruckexit.component.css'
})
export class MarktruckexitComponent {

  constructor(private service:TruckexitService) {}

  truckexitdata: TruckExit = {
 
    truckExitId: 0,
    cargoBookingId: 0,
    exitDate: new Date(),
    reason: ''    
}

MarkTruckExit(): void {
  var data = {
    truckExitId: this.truckexitdata.truckExitId,
    cargoBookingId: this.truckexitdata.cargoBookingId,
    exitDate: this.truckexitdata.exitDate,
    reason: this.truckexitdata.reason  
  };

//   this.service.MarkTruckExit(data).subscribe({
//     next: (msg) => {
//       console.log(msg);
//     },
//     error: (err) => {
//       alert(err);
//       console.log(err);
//     }
//   });
// }

}
}
