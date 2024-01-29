import { Component, Input } from '@angular/core';
import { Product } from '../product';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { User, UserRole } from '../user';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [MatButtonModule,MatCardModule, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule ],
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

  orderOpened = false;

  user: User = {
    id: 1234,
    name: "",
    displayNmae: "",
    mail: "",
    password: "",
    role: UserRole.Customer
  }

  public showOrder() {
    if(this.user.id && this.user.id != undefined)
    this.orderOpened = true;
   else
   alert("You must log in to make an order")
  }

  public get UserRole() {
    return UserRole;
  }

 
   openOrder(id:number) {
    if(!this.serviceForm.invalid)
      alert("order sent")
  }

  numberFormControl = new FormControl('', [Validators.required]);
  dateFormControl = new FormControl('', [Validators.required]);

  serviceForm = new FormGroup({number : this.numberFormControl, date: this.dateFormControl });


  matcher = new MyErrorStateMatcher();
}
