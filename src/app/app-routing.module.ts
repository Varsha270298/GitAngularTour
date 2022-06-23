import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CustomerComponent } from './customer/customer.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
//import { RegisterComponent } from './register/register.component';
=======
import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';
>>>>>>> eeb72d4408782f74d271a4f6b08c826ced11702a
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';


const routes: Routes =[
{ path: 'addtour', component:AddTourComponent },
{ path: 'addtour', component: AddTourComponent },
{path:'tourinfo',component:TourinfoComponent},
{path:'tourinfo-edit',component:TourinfoEditComponent },
{path:'customer',component:CustomerComponent},
{path:'login',component:LoginComponent},

{ path: 'edittour', component:EditTourInformationSystemComponent },
<<<<<<< HEAD
{ path: 'add-user', component: AddUserComponent },
{ path: 'list-user', component: ListUserComponent },
{ path: 'edit-user', component: EditUserComponent },
//{path:'register', component:RegisterComponent},
=======
<<<<<<< HEAD
{ path: 'listtour', component: TourInformationSystemListComponent},
=======

{path:'viewtour',component:TourInformationSystemListComponent},

{ path: 'listtour', component: TourInformationSystemListComponent},

>>>>>>> d9aa65ae13c5fe382a03413276c81756c94e6ade
>>>>>>> eeb72d4408782f74d271a4f6b08c826ced11702a

]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
