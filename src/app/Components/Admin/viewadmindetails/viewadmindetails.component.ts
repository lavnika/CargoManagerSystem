import { Component,OnInit } from '@angular/core';
import { Admin } from '../../../models/admin.model';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-viewadmindetails',
  templateUrl: './viewadmindetails.component.html',
  styleUrl: './viewadmindetails.component.css'
})
export class ViewadmindetailsComponent implements OnInit{
  constructor(private service:AdminService) {}
 

  adminlist?:Admin[];

  ngOnInit(): void {
    
    this.ViewAdminDetails();
  }
    
    ViewAdminDetails():void{
      this.service.ViewAdminDetails().subscribe({
        next: (data) => {
          this.adminlist=data;
        },
        error: (err) => {
          alert(err);
          console.log(err.message);
        }
      });
    }

}
