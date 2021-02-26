import { Employee } from "../employees-list/EmpInterface.component";

export class EmmployeeData{

  page!: number;
  per_page!: number;
  total!: number;
  totalPages!: number;
  data!: Employee[];

  constructor()
  {

  }

}
