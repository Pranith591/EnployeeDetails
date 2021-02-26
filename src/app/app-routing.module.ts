import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';

const routes: Routes = [
  {path:'employee', component:EmployeesListComponent},
  {path:'viewemployee',component:ViewEmployeeDetailsComponent},
  {path:'',redirectTo:'/employee',pathMatch:'full'},
  {path:'**' ,component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
