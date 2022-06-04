import { Component, OnInit } from '@angular/core';
import {JsonapiService} from "../jsonapi.service";

@Component({
  selector: 'app-viewapidata',
  templateUrl: './viewapidata.component.html',
  styleUrls: ['./viewapidata.component.css']
})
export class ViewapidataComponent implements OnInit {

  apidata:Array<any>=[]

  constructor(public jsonservice:JsonapiService) { }

  ngOnInit(): void {

    this.jsonservice.getdata().subscribe(data=>this.apidata=data)

  }

}
