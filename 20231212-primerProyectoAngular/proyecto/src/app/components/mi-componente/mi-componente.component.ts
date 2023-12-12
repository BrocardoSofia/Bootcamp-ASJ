import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  standalone: true,
  imports: [],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})
export class MiComponenteComponent {
  texto = 'texto de componente'
}
