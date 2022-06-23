import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
=======

import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

=======



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
>>>>>>> fd96caaea06dcef62b13f226b5d40f295b1457fe
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddService } from './admin-add.service';
import { AddTourComponent } from './add-tour/add-tour.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { CustomerComponent } from './customer/customer.component';
import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';

import { CustomerTourListComponent } from './customer-tour-list/customer-tour-list.component';
import { TourinfoListComponent } from './tourinfo-list/tourinfo-list.component';

import { TokenInterceptor } from './core/interceptor';
import { ApiService } from './core/api.service';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';

=======
<<<<<<< HEAD
import { CustomerComponent } from './customer/customer.component';
=======
>>>>>>> fd96caaea06dcef62b13f226b5d40f295b1457fe
//import { RegisterComponent } from './register/register.component';
>>>>>>> 5771fc3d5119f3a3706edfbdd34db01eb823cbf6




<<<<<<< HEAD
=======

>>>>>>> fd96caaea06dcef62b13f226b5d40f295b1457fe
>>>>>>> 7eba1d887763ba60ac47b20a9478ea393b162346


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AddStaffComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    
=======
<<<<<<< HEAD

    LoginComponent,
  

=======
    LoginComponent,
>>>>>>> fd96caaea06dcef62b13f226b5d40f295b1457fe
    EditTourInformationSystemComponent,
    CustomerComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    LoginComponent,
    TourinfoComponent,
    TourinfoEditComponent,
    AddTourComponent,
    TourInformationSystemListComponent,
    CustomerTourListComponent,
    TourinfoListComponent,
    CustomerDashboardComponent,
    StaffDashboardComponent
   
   
<<<<<<< HEAD
=======
   

>>>>>>> fd96caaea06dcef62b13f226b5d40f295b1457fe
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
=======
    ReactiveFormsModule,
<<<<<<< HEAD
    HttpClientModule,
    AppRoutingModule
   
=======
    HttpClientModule
>>>>>>> fd96caaea06dcef62b13f226b5d40f295b1457fe
>>>>>>> 7eba1d887763ba60ac47b20a9478ea393b162346
>>>>>>> 5771fc3d5119f3a3706edfbdd34db01eb823cbf6
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
