import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
import { CustomerTourListComponent } from './customer-tour-list/customer-tour-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CustomerComponent } from './customer/customer.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { TourinfoListComponent } from './tourinfo-list/tourinfo-list.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';


const routes: Routes =[
{ path:'addtour', component: AddTourComponent },
{path:'tourinfo',component:TourinfoComponent},
{path:'tourinfo-edit',component:TourinfoEditComponent },
{path:'customer',component:CustomerComponent},
{path:'login',component:LoginComponent},
<<<<<<< HEAD



{ path: 'edittour', component:EditTourInformationSystemComponent },

=======
{ path: 'edittour', component:EditTourInformationSystemComponent },
{ path: 'listtour', component: TourInformationSystemListComponent},
{ path: 'CustTourList', component:CustomerTourListComponent },
{ path: 'restourlist', component:TourinfoListComponent },
{ path: 'edittour', component:EditTourInformationSystemComponent },
>>>>>>> fd96caaea06dcef62b13f226b5d40f295b1457fe
{ path: 'add-user', component: AddUserComponent },
{ path: 'list-user', component: ListUserComponent },
{ path: 'edit-user', component: EditUserComponent },
//{path:'register', component:RegisterComponent},
<<<<<<< HEAD

{ path: 'listtour', component: TourInformationSystemListComponent},
{ path: 'edittour', component:EditTourInformationSystemComponent },
{path:'viewtour',component:TourInformationSystemListComponent},

{ path: 'listtour', component: TourInformationSystemListComponent},

=======
{path:'viewtour',component:TourInformationSystemListComponent},
>>>>>>> fd96caaea06dcef62b13f226b5d40f295b1457fe

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
