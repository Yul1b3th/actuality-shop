import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { patchState, signalState } from '@ngrx/signals';


@Component({
  selector: 'app-signal-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Signal</h1>
    <p>{{ state.counter() }} - Counter</p>
    <button (click)="increment()">Incremen (+)</button> |
    <button (click)="decrement()">Decrement (-)</button> |
    <button (click)="reset()">Reset (0)</button>
  `,
})
export class SignalStateComponent {
  // Declarar una Signal
  state = signalState({ counter: 0 });

  constructor() {
    effect(() => console.log(`Counter: ${this.state.counter()}`));
  }

  increment(): void {
    patchState( this.state, (state) => ({ counter: state.counter + 1 }));
  }

  decrement(): void {
    patchState( this.state, (state) => ({ counter: state.counter - 1 }));
  }

  reset(): void{
    patchState( this.state, () => ({ counter: 0 }));
  }


}
