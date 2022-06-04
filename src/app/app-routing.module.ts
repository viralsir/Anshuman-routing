import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {ContactusComponent} from "./contactus/contactus.component";
import {LoginComponent} from "./login/login.component";
import {EntryComponent} from "./entry/entry.component";
import {ViewComponent} from "./view/view.component";
import {ProductEntryComponent} from "./product-entry/product-entry.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {AddStudentComponent} from "./add-student/add-student.component";
import {ViewStudentComponent} from "./view-student/view-student.component";
import {ViewapidataComponent} from "./viewapidata/viewapidata.component";

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"login",component:LoginComponent},
  {path:"entry",component:AddStudentComponent},
  {path:"view",component:ViewStudentComponent},
  {path:"apiview",component:ViewapidataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
