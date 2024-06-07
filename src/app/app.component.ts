import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductsService } from './api/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  private readonly productsSvc = inject(ProductsService);

  // Creamos un observable 'products$'
  products$ = this.productsSvc.getAllProducts();
}
