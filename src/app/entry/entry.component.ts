import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmpService} from "../emp.service";
import {Employee} from "../employee";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {


  employeeformRef=new FormGroup({
    name:new FormControl(),
    salary:new FormControl()
  })
  constructor(public empserv:EmpService) { }

  ngOnInit(): void {
  }

  savebtnclicked()
  {
    let empform=this.employeeformRef.value
    let emp=new Employee(empform.name,empform.salary);
    this.empserv.employeelist.push(emp);

  }

}
