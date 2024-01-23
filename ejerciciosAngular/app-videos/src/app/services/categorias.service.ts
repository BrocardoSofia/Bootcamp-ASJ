import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categorias: String []=[
    "Musica",
    "Educacion",
    "Ocio",
    "Deportes",
    "Ciencia",
    "Moda",
    "Geografia",
    "Historia",
    "Anime",
    "Infantil",
    "Memes"
  ]

  constructor() { }

  getCategorias():String[]{
    return this.categorias;
  }
}
