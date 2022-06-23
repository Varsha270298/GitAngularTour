import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
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
//import { RegisterComponent } from './register/register.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditTourInformationSystemComponent,
    CustomerComponent,
    //RegisterComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    LoginComponent,
    TourinfoComponent,
    TourinfoEditComponent,
    AddTourComponent,
    TourInformationSystemListComponent,
    CustomerTourListComponent,
    TourinfoListComponent
   
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
