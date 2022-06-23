import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> 6f6bcd82fb43321b97336fd510e4b3c914e4d855
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddService } from './admin-add.service';
import { AddTourComponent } from './add-tour/add-tour.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
<<<<<<< HEAD
//import { RegisterComponent } from './register/register.component';


import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './core/api.service';
import { TokenInterceptor } from './core/interceptor';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WelcomeTourComponent } from './welcome-tour/welcome-tour.component';
=======
import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';
import { CustomerTourListComponent } from './customer-tour-list/customer-tour-list.component';
import { TourinfoListComponent } from './tourinfo-list/tourinfo-list.component';
import { TokenInterceptor } from './core/interceptor';
import { ApiService } from './core/api.service';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';

import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


>>>>>>> 6f6bcd82fb43321b97336fd510e4b3c914e4d855


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    EditTourInformationSystemComponent,
=======
    AddStaffComponent,
    LoginComponent,
     EditTourInformationSystemComponent,
>>>>>>> 6f6bcd82fb43321b97336fd510e4b3c914e4d855
    CustomerComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    TourinfoComponent,
    TourinfoEditComponent,
    AddTourComponent,
    TourInformationSystemListComponent,
<<<<<<< HEAD
    AdminDashboardComponent,
    WelcomeTourComponent
   
   
  ],
=======
    CustomerTourListComponent,
    TourinfoListComponent,
    CustomerDashboardComponent,
    StaffDashboardComponent,
    ],
>>>>>>> 6f6bcd82fb43321b97336fd510e4b3c914e4d855
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
=======
    AppRoutingModule,
    HttpClientModule
],
  
>>>>>>> 6f6bcd82fb43321b97336fd510e4b3c914e4d855
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
