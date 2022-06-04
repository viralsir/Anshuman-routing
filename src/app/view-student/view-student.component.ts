import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {NovaService} from "../nova.service";

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor(public anshuman:NovaService) { }

  ngOnInit(): void {
  }

}
