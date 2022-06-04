import { Injectable } from '@angular/core';
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class NovaService {
  childrenlist:Array<Student>=[]
  constructor() { }
}
