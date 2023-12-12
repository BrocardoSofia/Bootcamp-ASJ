import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {
  num = 0;

  incrementar(){
    this.num++;
  }

  decrementar(){
    this.num--;
  }

  generarNumeroAleatorio(){
    this.num = Math.floor(Math.random()*10);
  }
}
