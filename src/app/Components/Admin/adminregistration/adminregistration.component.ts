import { Component,OnInit } from '@angular/core';
import { Admin } from '../../../models/admin.model';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrl: './adminregistration.component.css'
})
export class AdminregistrationComponent implements OnInit{

  admindata: Admin = {
    adminId: 0,
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role:'',
    email: '',
    address: '',
    phoneNo: ''
  };
 
  constructor(private service:AdminService) {}
 
  ngOnInit(): void {
    
  }
  registrationSuccess: boolean = false;
  addAdminDetails(): void {
    var data = {
      AdminId: this.admindata.adminId,
      FirstName: this.admindata.firstName,
      LastName: this.admindata.lastName,
      Username: this.admindata.username,
      Password: this.admindata.password,
      Role:this.admindata.role,
      Email: this.admindata.email,
      Address: this.admindata.address,
      PhoneNo: this.admindata.phoneNo
    };
 
    this.service.addAdmin(data).subscribe({
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
