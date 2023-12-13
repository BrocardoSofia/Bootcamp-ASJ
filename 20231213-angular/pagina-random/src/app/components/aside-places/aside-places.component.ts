import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-places',
  templateUrl: './aside-places.component.html',
  styleUrl: './aside-places.component.css'
})
export class AsidePlacesComponent {
  places = [
    {
      name: "Springfield",
      imgSrc: "https://www.lavanguardia.com/files/image_449_220/uploads/2019/12/11/5fa5316a6d007.png",
      description: "Springfield es el centro de la serie y hogar de la familia Simpson. Está ubicada cerca de Shelbyville. Fundado en 1796 por Jebediah Springfield, Springfield es una pequeña ciudad con una planta nuclear, varias escuelas, una gran variedad de vecinos ricos y pobres, la taberna de Moe, el Bowl-A-Rama y el Kwik-E-Mart. Es también la sede de los cuarteles mundiales de la azucarera Motherloving (Madre amorosa, en América Latina; Madreamantísima, en España)."
    },
    {
      name: "Shelbyville",
      imgSrc: "https://i.pinimg.com/736x/a9/10/4c/a9104c1f4f1c6443fff579ea3688e4e1.jpg",
      description: "Shelbyville es la ciudad vecina y rival de Springfield. Fue fundada en 1796 por Shelbyville Manhattan, quién abogó al derecho de casarse con sus primas, causando un desacuerdo con Jebediah Springfield, por lo que ambos tomaron caminos diferentes. La intensa rivalidad entre ambas ciudades continúa hasta estos días, especialmente en el capítulo de la sexta temporada El limonero de Troya, en el cual los residentes de Shelbyville roban un preciado limonero desde Springfield. También en el capítulo Who Shot Mr. Burns? cuando los habitantes de Springfield destruyen la máquina de Burns, esta cae por las faldas del cerro, destruyendo un poblado. Luego, alguien pregunta ¿Qué pueblo hemos destruido?, a lo que Skinner responde Shelbyville, y todo el mundo empieza a festejar. En varios episodios, particularmente en El limonero de Troya, se sugiere que Shelbyville es un universo paralelo a Springfield."
    }
  ]
}
