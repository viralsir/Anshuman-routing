import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Student} from "../student";
import {NovaService} from "../nova.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  Studentref=new FormGroup(
    {
      name:new FormControl(),
      roll:new FormControl(),
      std:new FormControl()
    }
  )

  constructor(public anshuman:NovaService) { }

  ngOnInit(): void {
  }

  confirmbtnclicked(){
    let mj=this.Studentref.value
    let newstudent=new Student(mj.name,mj.roll,mj.std)
    this.anshuman.childrenlist.push(newstudent)
    this.Studentref.reset()
  }


}
