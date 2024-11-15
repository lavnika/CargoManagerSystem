import { Component } from '@angular/core';
import { CargoFare } from '../../../models/cargo-fare.model';
import { CargoFareService } from '../../../services/cargo-fare.service';

@Component({
  selector: 'app-searchforaddress',
  templateUrl: './searchforaddress.component.html',
  styleUrl: './searchforaddress.component.css'
})
export class SearchforaddressComponent {

  constructor(private service:CargoFareService) {}

  addresslist?:CargoFare[];

  ngOnInit(): void {
    
    this.getSearchforAddress();
  }

  getSearchforAddress():void{
    this.service.getSearchForAddress().subscribe({
      next: (addressdata) => {
        this.addresslist=addressdata;
      },
      error: (err) => {
        alert(err);
        console.log(err.message);
      }
    });
  }

}
