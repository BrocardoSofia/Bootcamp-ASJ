import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from "./components/mi-componente/mi-componente.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MiComponenteComponent]
})
export class AppComponent {
  title = 'proyecto';
  usuario = 'Sofia';
}
