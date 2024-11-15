import { Component } from '@angular/core';
import { Warehouse } from '../../../models/warehouse.model';
import { WarehouseService } from '../../../services/warehouse.service';

@Component({
  selector: 'app-viewwarehousedetails',
  templateUrl: './viewwarehousedetails.component.html',
  styleUrl: './viewwarehousedetails.component.css'
})
export class ViewwarehousedetailsComponent {

  constructor(private service:WarehouseService) {}
 
  ngOnInit(): void {
    this.getWareHousedetails()
  }



  warehouselist?:Warehouse[];
  warehousedata:Warehouse = {
    wareHouseId: 0,
    wareHouseName: '',
    stockStatus: false,
    capacity: 0,
    address: '',
    cargoBookingId: 0
  }


  getWareHouseDetails(): void {
    var WareHouseDetails = {
      wareHouseId: this.warehousedata.wareHouseId,
      wareHouseName: this.warehousedata.wareHouseName,
      stockStatus: this.warehousedata.stockStatus,
      capacity: this.warehousedata.capacity,
      address: this.warehousedata.address,
      cargoBookingId: this.warehousedata.cargoBookingId
    };
  }
  getWareHousedetails():void{
    this.service.getWareHouseDetails().subscribe({
      next: (WareHouseDetails) => {
        this.warehouselist=WareHouseDetails;
      },
      error: (err) => {
        alert(err);
        console.log(err.message);
      }
    });
  }

}
