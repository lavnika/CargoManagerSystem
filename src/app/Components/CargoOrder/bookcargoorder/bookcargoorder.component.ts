import { Component } from '@angular/core';
import { Cargoorder } from '../../../models/cargoorder.model';
import { CargoorderService } from '../../../services/cargoorder.service';

@Component({
  selector: 'app-bookcargoorder',
  templateUrl: './bookcargoorder.component.html',
  styleUrl: './bookcargoorder.component.css'
})
export class BookcargoorderComponent {

  constructor(private service: CargoorderService) {}
  //posting data
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
    addCargoOrders():void{
      var data = {
        CargoOrderId:this.cargodata.cargoOrderId,
        CustomerId:this.cargodata.customerId,
        CargoTypeId:this.cargodata.cargoTypeId,
        OrderDate:this.cargodata.orderDate,
        Status:this.cargodata.status,
        Location:this.cargodata.location,
        Quantity:this.cargodata.quantity,
        ProductId:this.cargodata.productId,
        
      };
      this.service.addCorgoOrders(data).subscribe({
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
