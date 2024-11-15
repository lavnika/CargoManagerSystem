import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminregistrationComponent } from './Components/Admin/adminregistration/adminregistration.component';
import { ViewadmindetailsComponent } from './Components/Admin/viewadmindetails/viewadmindetails.component';
import { EmployeeregistrationComponent } from './Components/Employee/employeeregistration/employeeregistration.component';
import { ViewemployeedetailsComponent } from './Components/Employee/viewemployeedetails/viewemployeedetails.component';
import { UpdateanddeleteemployeedetailsComponent } from './Components/Employee/updateanddeleteemployeedetails/updateanddeleteemployeedetails.component';
import { CustomerregistrationComponent } from './Components/Customer/customerregistration/customerregistration.component';
import { UpdatecustomerDetailsComponent } from './Components/Customer/updatecustomer-details/updatecustomer-details.component';
import { BookcargoorderComponent } from './Components/CargoOrder/bookcargoorder/bookcargoorder.component';
import { SerachforcargooderandupdateComponent } from './Components/CargoOrder/serachforcargooderandupdate/serachforcargooderandupdate.component';
import { BookingcargoorderComponent } from './Components/CargoBooking/bookingcargoorder/bookingcargoorder.component';
import { ViewcargobookingdetailsComponent } from './Components/CargoBooking/viewcargobookingdetails/viewcargobookingdetails.component';
import { UpdateanddeletecargobookingComponent } from './Components/CargoBooking/updateanddeletecargobooking/updateanddeletecargobooking.component';
import { SearchforaddressComponent } from './Components/CargoFare/searchforaddress/searchforaddress.component';
import { CalculatecargofareComponent } from './Components/CargoFare/calculatecargofare/calculatecargofare.component';
import { UpdatecargofareComponent } from './Components/CargoFare/updatecargofare/updatecargofare.component';
import { ViewhousekeepingmovementComponent } from './Components/HouseKeeping/viewhousekeepingmovement/viewhousekeepingmovement.component';
import { ViewwarehousedetailsComponent } from './Components/warehouse/viewwarehousedetails/viewwarehousedetails.component';
import { GenerategatepassComponent } from './Components/gatepass/generategatepass/generategatepass.component';
import { MarktruckexitComponent } from './Components/TruckExit/marktruckexit/marktruckexit.component';
import { UpdateplaceandpriceComponent } from './Components/CargoFare/updateplaceandprice/updateplaceandprice.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminlayoutComponent } from './Components/adminlayout/adminlayout.component';
import { UserlayoutComponent } from './Components/userlayout/userlayout.component';
import { CargolayoutComponent } from './Components/cargolayout/cargolayout.component';
import { UserdatalayoutComponent } from './Components/userdatalayout/userdatalayout.component';
import { CargofarelayoutComponent } from './Components/cargofarelayout/cargofarelayout.component';
import { CustomerDetailslayoutComponent } from './Components/customer-detailslayout/customer-detailslayout.component';
import { OrderdetailslayoutComponent } from './Components/orderdetailslayout/orderdetailslayout.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminregistrationComponent,
    ViewadmindetailsComponent,
    EmployeeregistrationComponent,
    ViewemployeedetailsComponent,
    UpdateanddeleteemployeedetailsComponent,
    CustomerregistrationComponent,
    UpdatecustomerDetailsComponent,
    BookcargoorderComponent,
    SerachforcargooderandupdateComponent,
    BookingcargoorderComponent,
    ViewcargobookingdetailsComponent,
    UpdateanddeletecargobookingComponent,
    SearchforaddressComponent,
    CalculatecargofareComponent,
    UpdatecargofareComponent,
    ViewhousekeepingmovementComponent,
    ViewwarehousedetailsComponent,
    GenerategatepassComponent,
    MarktruckexitComponent,
    UpdateplaceandpriceComponent,
    LoginComponent,
    AdminlayoutComponent,
    UserlayoutComponent,
    CargolayoutComponent,
    UserdatalayoutComponent,
    CargofarelayoutComponent,
    CustomerDetailslayoutComponent,
    OrderdetailslayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
