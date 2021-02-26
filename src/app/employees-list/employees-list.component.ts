import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpServiceService } from '../Shared/emp-service.service';
import { EmmployeeData } from '../Shared/EmployeeData.model';
import { Employee } from './EmpInterface.component';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],

})
export class EmployeesListComponent implements OnInit {

  constructor( private service:EmpServiceService,private router:Router) { }
EmpData?:EmmployeeData;
  ngOnInit(): void {
    this.service.getEmployeeDetails().subscribe(res=> this.EmpData =res);

  }

  ViewEmployeeDetails(empDetail:Employee)
  {
    this.service.formData = Object.assign({}, empDetail);
    this.router.navigate(['./viewemployee']);
    localStorage.setItem('datas',JSON.stringify(this.service.formData));

  }

}
