import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddService } from './admin-add.service';
import {HttpClientModule} from '@angular/common/http';
import { AddTourComponent } from './add-tour/add-tour.component';
@NgModule({
  declarations: [
    AppComponent,
    AddTourComponent,
  
import { TourinfoComponent } from './tourinfo/tourinfo.component';
import { HttpClientModule } from "@angular/common/http";
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TourinfoComponent,
    TourinfoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
