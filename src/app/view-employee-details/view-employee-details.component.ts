import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employees-list/EmpInterface.component';
import { EmpServiceService } from '../Shared/emp-service.service';

@Component({
  selector: 'app-view-employee-details',
  templateUrl: './view-employee-details.component.html',
  styleUrls: ['./view-employee-details.component.css']
})
export class ViewEmployeeDetailsComponent implements OnInit {

  constructor(public service:EmpServiceService) { }

data?:Employee
  ngOnInit(): void {

  this.data = JSON.parse(localStorage.getItem("datas")|| '{}');


  }

}
