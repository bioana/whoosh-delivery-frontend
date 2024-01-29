import { Component } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component'
import { ProductlistComponent } from './productlist/productlist.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductlistComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'whoosh-delivery-frontend';
}
