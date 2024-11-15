import { Component } from '@angular/core';
import { Gatepass } from '../../../models/gatepass.model';
import { GatepassService } from '../../../services/gatepass.service';
import { HousekeepingService } from '../../../services/housekeeping.service';

@Component({
  selector: 'app-generategatepass',
  templateUrl: './generategatepass.component.html',
  styleUrl: './generategatepass.component.css'
})
export class GenerategatepassComponent {

  constructor(private service:GatepassService) {}
 
  ngOnInit(): void {
    
  }

  gatepassdata:Gatepass = {
    gatePassNumber: 0,
    gatePassId: 0,
    cargoBookingId: 0,
    entryDate: new Date(),
    exitDate: new Date(),
    typeOfDelivery: ''
  }
 
  generategatepass(): void {
    var MovementData = {
      gatePassNumber: this.gatepassdata.gatePassNumber,
      gatePassId: this.gatepassdata.gatePassId,
      cargoBookingId: this.gatepassdata.cargoBookingId,
      entryDate: this.gatepassdata.entryDate,
      exitDate: this.gatepassdata.exitDate,
      typeOfDelivery: this.gatepassdata.typeOfDelivery
    };

    this.service.GenerateGatePass(MovementData).subscribe({
      next: (msg) => {
        console.log(msg);
      },
      error: (err) => {
        alert(err);
        console.log(err);
      }
    });
  }
  }


