import { Component } from '@angular/core';

@Component({
  selector: 'app-main-characters',
  templateUrl: './main-characters.component.html',
  styleUrl: './main-characters.component.css'
})
export class MainCharactersComponent {
  characters = [
    {
      name: "Homero J. Simpson",
      imgSrc: "https://media.gq.com.mx/photos/5be9eeb284b96e68a794165c/master/pass/11_cosas_que_le_preguntariamos_a_homero_simpson_2494.jpg",
      description: "Es el padre de la familia Simpson y protagonista; tiene 39 años, es obeso, calvo y con poco sentido común, aunque ama a todos sus hijos, aun así, su relación con Bart muchas veces es temperamental y agresiva."
    },
    {
      name: "Marjorie 'Marge' Bouvier",
      imgSrc: "https://i.pinimg.com/originals/c2/10/12/c2101224c76ba546967d2df796c5207d.jpg",
      description: "Es la madre de Bart, Lisa, Maggie y esposa de Homer, tiene 34 años.​ Es una madre abnegada, fanática del orden y la limpieza, en muchas ocasiones es la voz no atendida de la moderación y la razón aunque posee una actitud puritana y crítica que oscila entre la inocencia y el fanatismo intolerante. Siempre que se enfada hace un sonido similar a un 'hrmmm'. Siempre está en discusión con Homer, tratando de hacerle ver que su comportamiento es totalmente infantil, en algunos episodios es sobreprotectora con sus hijos."
    },
    {
      name: "Bartholomew 'Bart' Jojo Simpson",
      imgSrc: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bart-simpson-hafshah-uyainah.jpg",
      description: "Es el hijo mayor, tiene diez años de edad. Es travieso y a veces hiperactivo; muchas veces se mete en líos principalmente por tener ideas vandálicas o que se salen de control. Es un maestro del skate, tirachinas y grafiti."
    },
    {
      name: "Lisa Marie Simpson",
      imgSrc: "https://resizer.glanacion.com/resizer/v2/una-torta-con-el-rostro-de-lisa-simpson-no-salio-DWW2MAWBTJHBHBNXPK5KIEFMNE.jpg?auth=fe8852568c2b023cce54de18ec6123f69070285b9153c8287d8512e4ce2da705&width=768&quality=70&smart=false",
      description: "Es la hija del medio en la familia. Tiene ocho años, es muy madura para su edad, aunque también es egocéntrica y siempre quiere ser completamente perfecta; en muchas ocasiones ha sido criticada por ser la opinión que a nadie le interesa oír y por su idealismo desenfocado que la lleva a participar en movimientos y actividades de protesta donde lejos de solo protestar incluso intenta imponer su punto de vista obligatoriamente como sucedería cuando se hizo vegetariana. Lleva una relación estresante con su hermano Bart, aunque cuando se ponen de acuerdo son una dupla efectiva y de temer que han tenido logros enormes como detener criminales o ayudar a gente importante. Tiene un IQ de 158."
    },
    {
      name: "Margaret 'Maggie' Simpson",
      imgSrc: "https://p4.wallpaperbetter.com/wallpaper/880/636/893/the-simpsons-maggie-simpson-wallpaper-preview.jpg",
      description: "Es la bebé y la menor de la familia. Tiene un año, y físicamente es la versión preescolar de Lisa. Tiene el cerebro de un constante infractor de la ley e incluso en varias ocasiones ha usado armas de fuego y agredido gente; a pesar de ello mantiene la inocencia y ternura de una bebé. Siempre demuestra un comportamiento más inteligente y despierto de lo que un niño de su edad debería tener. Tiene la manía de llevar un chupete en la boca que rara vez se lo quita. Solo ha hablado ocho veces y solo tres se confirmaron."
    }
  ]
}
