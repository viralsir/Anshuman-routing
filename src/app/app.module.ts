import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { EntryComponent } from './entry/entry.component';
import { ViewComponent } from './view/view.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import {HttpClientModule} from "@angular/common/http";
import { ViewapidataComponent } from './viewapidata/viewapidata.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    EntryComponent,
    ViewComponent,
    ProductEntryComponent,
    ProductViewComponent,
    AddStudentComponent,
    ViewStudentComponent,
    ViewapidataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
