import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';

export const routes: Routes = [
    {path: 'products-list', component: ProductlistComponent},
    {path: 'login', component: LoginComponent},
 ];
