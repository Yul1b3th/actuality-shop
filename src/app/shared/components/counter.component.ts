import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Signal</h1>
    <p>{{ counter() }} - Counter</p>
    <p>{{ double() }} - Double</p>
    <button (click)="increment()">Incremen (+)</button> |
    <button (click)="decrement()">Decrement (-)</button> |
    <button (click)="reset()">Reset (0)</button>
  `,
})
export class CounterComponent {
  // Declarar una Signal
  counter = signal<number>(0);
  double = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log(`Counter: ${this.counter()}`));
  }

  increment(): void {
    this.counter.update((current) => current + 1);
  }

  decrement(): void {
    this.counter.update((current) => current - 1);
  }

  reset(): void{
    this.counter.set(0);
  }


}
