import { Component } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { InfoVideo } from '../../models/InfoVideo';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css'],
})
export class ListVideosComponent {

  categorias: String []=[]
  listVideos: InfoVideo[] = [];
  shownVideos:InfoVideo[]=[];
  busqueda:string="";
  categoria: string = '';

  constructor(private videosService: VideoService,
              private catecoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.videosService.getVideos().subscribe((res) => {
      this.listVideos = res.filter(video=>!video.eliminado);
      this.shownVideos= this.listVideos;
    });

    this.categorias = this.catecoriasService.getCategorias();
  }

  getThumbnail(url: String) {
    return 'https://img.youtube.com/vi/'+idUrl(url)+'/0.jpg';
  }

  puntaje(video:InfoVideo){
    let suma: number = 0;
    let promedio: number = 0;

    if(video !== null){
      for(let estrella of video.estrellas){
        suma += estrella;
      }
      promedio = suma / video.estrellas.length;
    }

    return !isNaN(promedio)? promedio.toFixed(1):"Sin Puntuar";
  }

  cambiarCategoria(){
    if(this.categoria === 'Todas'){
      this.shownVideos = this.listVideos;
    }else{
      this.shownVideos= this.listVideos.filter(video=>video.categoria.includes(this.categoria));
    }
  }


  buscar(){
    this.shownVideos= this.listVideos.filter(video=>video.titulo.includes(this.busqueda));
  }
}

function idUrl(url: String): string {
  // Elimina todo lo que estÃ¡ antes del primer 'v='
  let idVideo = url.split('v=')[1];

  return idVideo;
}
