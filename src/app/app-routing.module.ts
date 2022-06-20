import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourinfoEditComponent } from './tourinfo-edit/tourinfo-edit.component';
import { TourinfoComponent } from './tourinfo/tourinfo.component';

const routes: Routes = [
  {path:'tourinfo',component: TourinfoComponent},
  {path:'tourinfo-edit',component:TourinfoEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
