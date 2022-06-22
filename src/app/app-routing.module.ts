import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
import { CustomerComponent } from './customer/customer.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { LoginComponent } from './login/login.component';
import { TourInformationSystemListComponent } from './tour-information-system-list/tour-information-system-list.component';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';


const routes: Routes =[
{ path: 'addtour', component: AddTourComponent },
{path:'tourinfo',component:TourinfoComponent},
{path:'tourinfo-edit',component:TourinfoEditComponent },
{path:'customer',component:CustomerComponent},
{path:'login',component:LoginComponent},
{ path: 'edittour', component:EditTourInformationSystemComponent },
{ path: 'listtour', component: TourInformationSystemListComponent},

]
  





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
