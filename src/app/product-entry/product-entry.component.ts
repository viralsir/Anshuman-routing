import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../product";

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  productformref=new FormGroup({
    name:new FormControl(),
    qty:new FormControl(),
    rate:new FormControl()
  })

  constructor(public product_service:ProductService) { }

  ngOnInit(): void {
  }

  addbtnclicked():void{

    let form=this.productformref.value
    let newproduct=new Product(form.name,form.qty,form.rate)
    this.product_service.product_list.push(newproduct);
    this.productformref.reset();
  }

}
