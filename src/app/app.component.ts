import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ProductsService } from './api/products.service';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './shared/components/counter.component';
import { SignalStateComponent } from './shared/components/sinal-state.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, CounterComponent, SignalStateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  private readonly productsSvc = inject(ProductsService);

  // Creamos un observable 'products$'
  products$ = this.productsSvc.getAllProducts();
}
