import { Component, Inject, Injector, Signal, computed, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  // searchQuery: Signal<string> = signal('Yulibeth');
  // searchQuery = signal<string>('Rivero');
  // searchQueryReadonly = this.searchQuery.asReadonly();
  user = signal<string>('Yulibeth');
  rol = signal<string>('Estudiante');
  area = signal<string>('Desarrollo Web');

  private readonly injector = inject(Injector);

  constructor() {
    // effect(() => console.log(this.user()));
  }

  resultComputed = computed(() => `
   ${this.user()} ${this.rol()}
  `)

  onChangeUser(): void {
    this.user.set('Maria Perez');
    // effect(() => console.log(this.user()));
    effect(() => console.log(this.user()), {injector: this.injector});
  }

  onChangeRol(): void {
    this.rol.set('Mentor')
  }

  addArea(): void {
    this.rol.update((current) => current + ' Front End Web Developer');
  }
}
