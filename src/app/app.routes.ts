import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component').then(c => c.ProductsComponent)
  },
  {
    path: 'product-details/:id',
    loadComponent: () => import('./features/products/details/details.component')
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then(c => c.CartComponent)
  },
  {
    path: 'signal',
    loadComponent: () => import('./features/signals/signals.component').then(c => c.SignalsComponent)
  },
  {path: '', redirectTo: '/products', pathMatch: 'full'},
];
