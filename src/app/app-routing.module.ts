import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminregistrationComponent } from './Components/Admin/adminregistration/adminregistration.component';
import { ViewadmindetailsComponent } from './Components/Admin/viewadmindetails/viewadmindetails.component';
import { BookingcargoorderComponent } from './Components/CargoBooking/bookingcargoorder/bookingcargoorder.component';
import { UpdateanddeletecargobookingComponent } from './Components/CargoBooking/updateanddeletecargobooking/updateanddeletecargobooking.component';
import { ViewcargobookingdetailsComponent } from './Components/CargoBooking/viewcargobookingdetails/viewcargobookingdetails.component';
import { CalculatecargofareComponent } from './Components/CargoFare/calculatecargofare/calculatecargofare.component';
import { SearchforaddressComponent } from './Components/CargoFare/searchforaddress/searchforaddress.component';
import { UpdatecargofareComponent } from './Components/CargoFare/updatecargofare/updatecargofare.component';
import { UpdateplaceandpriceComponent } from './Components/CargoFare/updateplaceandprice/updateplaceandprice.component';
import { BookcargoorderComponent } from './Components/CargoOrder/bookcargoorder/bookcargoorder.component';
import { SerachforcargooderandupdateComponent } from './Components/CargoOrder/serachforcargooderandupdate/serachforcargooderandupdate.component';
import { CustomerregistrationComponent } from './Components/Customer/customerregistration/customerregistration.component';
import { UpdatecustomerDetailsComponent } from './Components/Customer/updatecustomer-details/updatecustomer-details.component';
import { EmployeeregistrationComponent } from './Components/Employee/employeeregistration/employeeregistration.component';
import { UpdateanddeleteemployeedetailsComponent } from './Components/Employee/updateanddeleteemployeedetails/updateanddeleteemployeedetails.component';
import { ViewemployeedetailsComponent } from './Components/Employee/viewemployeedetails/viewemployeedetails.component';
import { GenerategatepassComponent } from './Components/gatepass/generategatepass/generategatepass.component';
import { ViewhousekeepingmovementComponent } from './Components/HouseKeeping/viewhousekeepingmovement/viewhousekeepingmovement.component';
import { LoginComponent } from './Components/login/login.component';
import { ViewwarehousedetailsComponent } from './Components/warehouse/viewwarehousedetails/viewwarehousedetails.component';
import { AdminlayoutComponent } from './Components/adminlayout/adminlayout.component';
import { UserlayoutComponent } from './Components/userlayout/userlayout.component';
import { CargolayoutComponent } from './Components/cargolayout/cargolayout.component';
import { UserdatalayoutComponent } from './Components/userdatalayout/userdatalayout.component';
import { CargofarelayoutComponent } from './Components/cargofarelayout/cargofarelayout.component';
import { CustomerDetailslayoutComponent } from './Components/customer-detailslayout/customer-detailslayout.component';
import { OrderdetailslayoutComponent } from './Components/orderdetailslayout/orderdetailslayout.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  //{path:'login',component:LogincomponentComponent},
  {path:'home',component:HomeComponent},
  
  {path:'login',component:LoginComponent},
  {
    path:'admin-dashboard',component:AdminlayoutComponent,
  },
  {path:'admin',component:AdminregistrationComponent},

  {path:'admin-dashboard',component:AdminlayoutComponent},

  {path:'user-dashboard',component:UserlayoutComponent},

  {path:'cargo-layout',component:CargolayoutComponent},

  {path:'userdata-layout',component:UserdatalayoutComponent},

  {path:'cargofarelayout',component:CargofarelayoutComponent},

  {path:'order-details',component:OrderdetailslayoutComponent},

  {path:'customer-details',component:CustomerDetailslayoutComponent},

  {path:'viewadmin',component:ViewadmindetailsComponent},

  {path:'employee',component:EmployeeregistrationComponent},

  {path:'viewemployee',component:ViewemployeedetailsComponent},

  {path:'updatedeleteemployee',component:UpdateanddeleteemployeedetailsComponent},

  {path:'customer',component:CustomerregistrationComponent},

  {path:'updatecustomer',component:UpdatecustomerDetailsComponent},

  {path:'cargoorder',component:BookcargoorderComponent},

  {path:'searchforcargo',component:SerachforcargooderandupdateComponent},

  {path:'cargobooking',component:BookingcargoorderComponent},

  {path:'viewcargobooking',component:ViewcargobookingdetailsComponent},

  {path:'updatedeletecargobooking',component:UpdateanddeletecargobookingComponent},

  {path:'cargofare',component:SearchforaddressComponent},

  {path:'calculatefare',component:CalculatecargofareComponent},

  {path:'viewhouse',component:ViewhousekeepingmovementComponent},

  {path:'viewwarehouse',component:ViewwarehousedetailsComponent},

  {path:'gatepass',component:GenerategatepassComponent},

  {path:'getcargofare',component:UpdatecargofareComponent},

  {path:'updateplaceprice',component:UpdateplaceandpriceComponent}
 // {path:'cargoBooking',component:CargobookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
