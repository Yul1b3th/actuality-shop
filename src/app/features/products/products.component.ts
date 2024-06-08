import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../../api/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productSvc = inject(ProductsService);
  // Usamos product$ como un observable
  products$ = this.productSvc.getAllProducts();
}
