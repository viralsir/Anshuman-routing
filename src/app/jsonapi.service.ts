import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JsonapiService {

  constructor(public httpclient:HttpClient) { }

  getdata():Observable<Array<any>>{

    return this.httpclient.get<Array<any>>("https://jsonplaceholder.typicode.com/posts")
  }

}
