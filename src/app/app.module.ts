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
>>>>>>> 0f8f3111d07699769e290ec3c94f08ee9e16273f
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddService } from './admin-add.service';
import { AddTourComponent } from './add-tour/add-tour.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
<<<<<<< HEAD

import { ApiResponse } from './api.response';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';
<<<<<<< HEAD
import { CustomerComponent } from './customer/customer.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptor';
import { ApiService } from './core/api.service';
=======
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
>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255

>>>>>>> 0f8f3111d07699769e290ec3c94f08ee9e16273f



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
  
    EditTourInformationSystemComponent,
    CustomerComponent,
  
=======
<<<<<<< HEAD
    EditTourInformationSystemComponent,
    HomeComponent,
    UpdateCustomerComponent,
    ListUserComponent,
    CustomerListComponent,
    //CustomerComponent,
    RegisterComponent,
>>>>>>> 0f8f3111d07699769e290ec3c94f08ee9e16273f
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
=======
    AddStaffComponent,
>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255
    LoginComponent,
     EditTourInformationSystemComponent,
    CustomerComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    TourinfoComponent,
    TourinfoEditComponent,
    AddTourComponent,
<<<<<<< HEAD
  
   
<<<<<<< HEAD
   
=======
>>>>>>> 0f8f3111d07699769e290ec3c94f08ee9e16273f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
=======
    HttpClientModule,
=======
    TourInformationSystemListComponent,
    CustomerTourListComponent,
    TourinfoListComponent,
    CustomerDashboardComponent,
    StaffDashboardComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
],
  
>>>>>>> 0f8f3111d07699769e290ec3c94f08ee9e16273f
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
