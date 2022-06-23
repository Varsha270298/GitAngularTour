import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CustomerComponent } from './customer/customer.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';


const routes: Routes =[
{ path: 'addtour', component: AddTourComponent },
{path:'tourinfo',component:TourinfoComponent},
{path:'tourinfo-edit',component:TourinfoEditComponent },
{path:'customer',component:CustomerComponent},
{path:'login',component:LoginComponent},
{ path: 'edittour', component:EditTourInformationSystemComponent },
{ path: 'add-user', component: AddUserComponent },
{ path: 'list-user', component: ListUserComponent },
{ path: 'edit-user', component: EditUserComponent },
//{path:'register', component:RegisterComponent},

]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
