import { Component } from '@angular/core';
import { CargoFare } from '../../../models/cargo-fare.model';
import { CargoFareService } from '../../../services/cargo-fare.service';

@Component({
  selector: 'app-calculatecargofare',
  templateUrl: './calculatecargofare.component.html',
  styleUrl: './calculatecargofare.component.css'
})
export class CalculatecargofareComponent {

  constructor(private service:CargoFareService) {}

  ngOnInit(): void {
    
    this.calculateCargoPrice();
  }

  userInputId?: number;
  cargoFareData: CargoFare = {
    cargoFareID:0,
    sourceLocation:'',
    destinationLocation: '',
    weight: 0,
    volume: 0,
    modeOfTransport: '',
    shippingDate:new Date(),
    arrivalDate: new Date(),
    fareAmount:0,
    additionalCharges:0,
    totalAmount:0,
    cargoOrderId:0,
  }

  calculateCargoPrice(): void {
    var addressdata = {
      cargoFareID: this.cargoFareData.cargoFareID,
      sourceLocation: this.cargoFareData.sourceLocation,
      destinationLocation: this.cargoFareData.destinationLocation,
      weight: this.cargoFareData.weight,
      volume: this.cargoFareData.volume,
      modeOfTransport: this.cargoFareData.modeOfTransport,
      shippingDate: this.cargoFareData.shippingDate,
      arrivalDate: this.cargoFareData.arrivalDate,
      fareAmount: this.cargoFareData.fareAmount,
      additionalCharges: this.cargoFareData.additionalCharges,
      totalAmount: this.cargoFareData.totalAmount,
      cargoOrderId: this.cargoFareData.cargoOrderId
    };
    this.service.calculateCargoPrice(addressdata).subscribe({
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
