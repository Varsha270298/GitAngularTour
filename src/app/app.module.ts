import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddService } from './admin-add.service';
import {HttpClientModule} from '@angular/common/http';
import { AddTourComponent } from './add-tour/add-tour.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';


  

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    EditTourInformationSystemComponent,
    TourInformationSystemListComponent
=======
    CustomerComponent,
    LoginComponent,
    TourinfoComponent,
    TourinfoEditComponent,
    AddTourComponent,
   
>>>>>>> 3d427460d37a1203d5e94b3bda91480973040bc8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    ReactiveFormsModule,
>>>>>>> 3d427460d37a1203d5e94b3bda91480973040bc8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
