import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AddTourComponent } from './add-tour/add-tour.component';
=======
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
>>>>>>> 0e000c980412ce7f4a0fdce8c4284fcadfc14003
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';
import { AddTourComponent } from './add-tour/add-tour.component';

const routes: Routes =[
{ path: 'addtour', component: AddTourComponent },
{path:'tourinfo',component: TourinfoComponent},
{path:'tourinfo-edit',component:TourinfoEditComponent },
{path:'customer',component:CustomerComponent},
{path:'login',component:LoginComponent},
{ path: 'addtour', component: AddTourComponent },

]
  

<<<<<<< HEAD


const routes: Routes = [
  {path:'tourinfo',component: TourinfoComponent},
  {path:'tourinfo-edit',component:TourinfoEditComponent },
  { path: 'addtour', component: AddTourComponent },
];
=======
>>>>>>> 0e000c980412ce7f4a0fdce8c4284fcadfc14003

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
