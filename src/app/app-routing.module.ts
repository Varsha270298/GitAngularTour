import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTourListComponent } from './customer-tour-list/customer-tour-list.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';

//import { RegisterComponent } from './register/register.component';
import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';

import { RegisterComponent } from './register/register.component';
//import { RegisterComponent } from './register/register.component';

import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { TourinfoListComponent } from './tourinfo-list/tourinfo-list.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';

import { UpdateCustomerComponent } from './update-customer/update-customer.component';

import { WelcomeTourComponent } from './welcome-tour/welcome-tour.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';





const routes: Routes =[
{ path: 'addtour', component:AddTourComponent },

{path:'tourinfo',component:TourinfoComponent},
{path:'tourinfo/:id',component:TourinfoEditComponent },
{path:'customer',component:CustomerComponent},
{path:'customer-list',component:CustomerListComponent},
{path:'login',component:LoginComponent},

<<<<<<< HEAD
{ path: 'edittour', component:EditTourInformationSystemComponent },
{ path: 'listtour', component: TourInformationSystemListComponent},
{ path: 'CustTourList', component:CustomerTourListComponent },
{ path: 'restourlist', component:TourinfoListComponent },
=======


{ path: 'edittour', component:EditTourInformationSystemComponent },

>>>>>>> 033cbb4e603d66504a44b95365ea6451f9c82fca
{ path: 'add-user', component: AddUserComponent },
{ path: 'list-user', component: ListUserComponent },
{ path: 'edit-user', component: EditUserComponent },
//{path:'register', component:RegisterComponent},
<<<<<<< HEAD
=======

>>>>>>> 033cbb4e603d66504a44b95365ea6451f9c82fca


<<<<<<< HEAD

];
  @NgModule({
=======



{path:'update-customer',component:UpdateCustomerComponent},
{ path: 'edittour', component:EditTourInformationSystemComponent },
{ path: 'add-user', component: AddUserComponent },
{ path: 'list-user', component: ListUserComponent },
//{ path: 'edit-user', component: EditUserComponent },
{path:'register', component:RegisterComponent},
{path : '', component : LoginComponent, pathMatch:'full'},
{path: 'edittour', component:EditTourInformationSystemComponent },
{ path: 'edittour', component:EditTourInformationSystemComponent },
{ path: 'listtour', component: TourInformationSystemListComponent},
{ path: 'CustTourList', component:CustomerTourListComponent },
{ path: 'restourlist', component:TourinfoListComponent },
{ path: 'add-user', component: AddUserComponent },
{ path: 'list-user', component: ListUserComponent },
{ path: 'edit-user', component: EditUserComponent },
{path:'', component:WelcomeTourComponent},
{path:'admindashboard',component:AdminDashboardComponent },
{path:'customerdashboard',component:CustomerDashboardComponent},
{path:'customeredit', component:CustomerEditComponent}






]




  

@NgModule({
>>>>>>> 033cbb4e603d66504a44b95365ea6451f9c82fca
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
