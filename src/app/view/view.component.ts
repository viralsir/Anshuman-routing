import { Component, OnInit } from '@angular/core';
import {EmpService} from "../emp.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public empserv:EmpService) { }

  ngOnInit(): void {
  }

}
