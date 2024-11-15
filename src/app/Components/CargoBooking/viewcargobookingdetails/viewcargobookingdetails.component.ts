import { Component,OnInit } from '@angular/core';
import { Cargobooking } from '../../../models/cargobooking.model';
import { CargobookingService } from '../../../services/cargobooking.service';

@Component({
  selector: 'app-viewcargobookingdetails',
  templateUrl: './viewcargobookingdetails.component.html',
  styleUrl: './viewcargobookingdetails.component.css'
})
export class ViewcargobookingdetailsComponent implements OnInit {

  constructor(private service: CargobookingService) {}

  ngOnInit(): void {
    this.GetCargoBookingDetails(); }
  cargobookingDetails?:Cargobooking[];
  GetCargoBookingDetails():void{
    this.service.GetAllcargoBookingDetails().subscribe({
      next:(data)=>{
        this.cargobookingDetails=data;
      },
      error:(error)=>{
        alert(error.message)
      }
    });
  
   }

}
