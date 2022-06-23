import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CustomerComponent } from './customer/customer.component';
import { EditTourInformationSystemComponent } from './edit-tour-information-system/edit-tour-information-system.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> f601aa20b10c18d0d60e01641b3c789ffe97d245
{ path: 'edittour', component:EditTourInformationSystemComponent },
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 42cab10d1ac19153643f048403f1270bffd41e5e
{ path: 'add-user', component: AddUserComponent },
{ path: 'list-user', component: ListUserComponent },
{ path: 'edit-user', component: EditUserComponent },
//{path:'register', component:RegisterComponent},
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> af479dc9a738557c6c854ee858ea5acc613fb706
{ path: 'listtour', component: TourInformationSystemListComponent},
{ path: 'edittour', component:EditTourInformationSystemComponent },
{path:'viewtour',component:TourInformationSystemListComponent},
>>>>>>> 42cab10d1ac19153643f048403f1270bffd41e5e

<<<<<<< HEAD
>>>>>>> af479dc9a738557c6c854ee858ea5acc613fb706
{ path: 'listtour', component: TourInformationSystemListComponent},
=======
>>>>>>> f601aa20b10c18d0d60e01641b3c789ffe97d245

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> d9aa65ae13c5fe382a03413276c81756c94e6ade
>>>>>>> eeb72d4408782f74d271a4f6b08c826ced11702a
>>>>>>> af479dc9a738557c6c854ee858ea5acc613fb706
>>>>>>> 42cab10d1ac19153643f048403f1270bffd41e5e

]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
