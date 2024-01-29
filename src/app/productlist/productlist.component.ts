import { Component, Input } from '@angular/core';
import { Product } from '../product';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [MatButtonModule,MatCardModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent {
  product1: Product = {
    id: 1,
    name: 'Product 1 ',
    description: 'Description 1',
    price: 1111,
  };
  product2: Product = {
    id: 2,
    name: 'Product 2 ',
    description: 'Description 2',
    price: 2222,
  };

  products = [this.product1, this.product2];

  user: User = {
    id: undefined,
    name: "",
    displayNmae: "",
    mail: "",
    password: ""}

  public orderClicked(id:number) {
    if(this.user.id && this.user.id != undefined)
    alert('Open ' + id);
   else
   alert("You must log in to make an order")
  }
}
