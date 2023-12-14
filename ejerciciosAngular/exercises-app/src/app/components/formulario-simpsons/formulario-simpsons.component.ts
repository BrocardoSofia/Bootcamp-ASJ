import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-simpsons',
  templateUrl: './formulario-simpsons.component.html',
  styleUrl: './formulario-simpsons.component.css'
})
export class FormularioSimpsonsComponent {
  characterArray: Character[] = [];

  loadCharacter(name: any, imgSrc: any, rol: any){
    let character = {name: name.value, imgSrc: imgSrc.value, rol: rol.value}
    this.characterArray.push(character);
    name.value = "";
    imgSrc.value = "";
    rol.value = "";
  }
}

type Character = {
  name: string;
  imgSrc: string;
  rol: string;
}