import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpServiceService } from './Shared/emp-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    PageNotFoundComponent,
    ViewEmployeeDetailsComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
