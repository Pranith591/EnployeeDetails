import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EmmployeeData } from './EmployeeData.model';
import { Observable } from 'rxjs';
import { Employee } from '../employees-list/EmpInterface.component';

@Injectable()
export class EmpServiceService {
test?:string;
  constructor(private _http:HttpClient) { }

readonly employeeURL:string='https://reqres.in/api/users?page=1';

formData:Employee = new Employee();

getEmployeeDetails():Observable<EmmployeeData>
{
  return this._http.get<EmmployeeData>(this.employeeURL);
}
}
