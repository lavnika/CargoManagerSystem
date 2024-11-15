import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  form:any={
    userId:null,
    password:null,
    role:null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles:string[] =[];
 
  constructor(private loginService:LoginService, private storageService:StorageService,private router:Router){
  }
 
  ngOnInit():void{
    if(this.storageService.isLoggedIn()){
      this.isLoggedIn = true;
      this.roles =  this.storageService.getUser().roles;
    }
  }
 
  onSubmit():void{
    const{userId, password,role}=this.form;
    this.loginService.login(userId, password, role).subscribe({
      next:data =>{
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.redirectUserByRole();
      },
      error:err =>{
        console.log(this.errorMessage)
        this.errorMessage = err.error.errorMessage;
        this.isLoginFailed = true;
      }
    });
  }
  redirectUserByRole(): void {
    if (this.form.role.includes('Admin')) {
      this.router.navigate(['admin-dashboard']);
    } else if (this.form.role.includes('Employee')) {
      this.router.navigate(['user-dashboard']);
    } else {
      // Redirect to a default page or display an error message
      alert("Unauthorized");
    }
  }
}