import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
<<<<<<< HEAD
import { AddUserComponent } from './add-user/add-user.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
=======
import { CustomerTourListComponent } from './customer-tour-list/customer-tour-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255
import { CustomerComponent } from './customer/customer.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
=======
//import { RegisterComponent } from './register/register.component';
import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';
>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { TourinfoListComponent } from './tourinfo-list/tourinfo-list.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';
<<<<<<< HEAD
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
=======
import { WelcomeTourComponent } from './welcome-tour/welcome-tour.component';
>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255



 { path: 'addtour', component: AddTourComponent },
const routes: Routes =[
{ path:'addtour', component: AddTourComponent },
{path:'tourinfo',component:TourinfoComponent},
{path:'tourinfo/:id',component:TourinfoEditComponent },
{path:'customer',component:CustomerComponent},
{path:'customer-list',component:CustomerListComponent},
{path:'login',component:LoginComponent},
<<<<<<< HEAD
{path:'update-customer',component:UpdateCustomerComponent},
{ path: 'edittour', component:EditTourInformationSystemComponent },
{ path: 'add-user', component: AddUserComponent },
{ path: 'list-user', component: ListUserComponent },
//{ path: 'edit-user', component: EditUserComponent },
{path:'register', component:RegisterComponent},
{path : '', component : LoginComponent, pathMatch:'full'}
]
=======
{path: 'edittour', component:EditTourInformationSystemComponent },
{ path: 'edittour', component:EditTourInformationSystemComponent },
{ path: 'listtour', component: TourInformationSystemListComponent},
{ path: 'CustTourList', component:CustomerTourListComponent },
{ path: 'restourlist', component:TourinfoListComponent },
{ path: 'add-user', component: AddUserComponent },
{ path: 'list-user', component: ListUserComponent },
{ path: 'edit-user', component: EditUserComponent },
{path:'welcome', component:WelcomeTourComponent},
// {path:'viewtour',component:TourInformationSystemListComponent},
{path:'admindashboard',component:AdminDashboardComponent },





];
>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
