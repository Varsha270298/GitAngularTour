import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
=======

>>>>>>> 42cab10d1ac19153643f048403f1270bffd41e5e
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddService } from './admin-add.service';
import { AddTourComponent } from './add-tour/add-tour.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';
import { TokenInterceptor } from './core/interceptor';
import { ApiService } from './core/api.service';
//import { RegisterComponent } from './register/register.component';


<<<<<<< HEAD
=======
=======
import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';
>>>>>>> eeb72d4408782f74d271a4f6b08c826ced11702a
>>>>>>> af479dc9a738557c6c854ee858ea5acc613fb706
>>>>>>> 42cab10d1ac19153643f048403f1270bffd41e5e


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
  
=======
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
    TourInformationSystemListComponent
   
   
>>>>>>> af479dc9a738557c6c854ee858ea5acc613fb706
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
