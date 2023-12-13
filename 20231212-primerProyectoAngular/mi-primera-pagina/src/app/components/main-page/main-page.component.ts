import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  dogs = [
    {
      imgSrc: "https://tvazteca.brightspotcdn.com/38/e6/7b33cdd042d5a378d56a7f81fa73/perritos-primeros-auxilios.jpg",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque exercitationem quo ab provident magni modi dignissimos eos iusto maxime! Illum facere ipsam eum deserunt in tempore sint, commodi perspiciatis ad."
    },
    {
      imgSrc: "https://www.noticiasdemexico.mx/u/fotografias/m/2023/3/10/f768x1-19443_19570_15.jpg",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque exercitationem quo ab provident magni modi dignissimos eos iusto maxime! Illum facere ipsam eum deserunt in tempore sint, commodi perspiciatis ad."
    },
    {
      imgSrc: "https://holatelcel.com/wp-content/uploads/2019/02/HEAD-shazam-de-perritos.jpg",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque exercitationem quo ab provident magni modi dignissimos eos iusto maxime! Illum facere ipsam eum deserunt in tempore sint, commodi perspiciatis ad."
    },
    {
      imgSrc: "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque exercitationem quo ab provident magni modi dignissimos eos iusto maxime! Illum facere ipsam eum deserunt in tempore sint, commodi perspiciatis ad."
    },
    {
      imgSrc: "https://images.squarespace-cdn.com/content/v1/57a2aeb1ff7c509ef76566c9/1580174975544-U5MTHMIVJKK6G8XBALLQ/laula-co-pdKPFBysSfA-unsplash.jpg",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque exercitationem quo ab provident magni modi dignissimos eos iusto maxime! Illum facere ipsam eum deserunt in tempore sint, commodi perspiciatis ad."
    }
  ]
}
