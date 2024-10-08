import { Component, EnvironmentInjector, OnInit, inject, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { ProductsService } from '../../api/products.service';
import { CardComponent, Product } from './card/card.component';
import { CartStore } from '../../store/cart.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'

})
export class ProductsComponent implements OnInit{
  productSvc = inject(ProductsService);
  // Usamos product$ como un observable para mostrar los productos
  products$ = this.productSvc.getAllProducts();
  productSvc2: any;
  private readonly injectorCtxt = inject(EnvironmentInjector);
  cartStore = inject(CartStore);

  ngOnInit(): void {
    runInInjectionContext(this.injectorCtxt, () => {
      this.productSvc2 = inject(ProductsService);
      // Convertir un observable a toSignal
      const result = toSignal(this.products$);
      // console.log(result);

    });
  }

  // Llamamos a la store para guardar el producto en el carrito
  onAddToCart(product: Product): void {
    this.cartStore.addToCart(product);
  }


}
