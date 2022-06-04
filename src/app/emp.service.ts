import { Injectable } from '@angular/core';
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  employeelist:Array<Employee>=[]

  constructor() { }




}
