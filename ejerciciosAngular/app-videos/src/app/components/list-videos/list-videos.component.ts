import { Component } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { InfoVideo } from '../../models/InfoVideo';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrl: './list-videos.component.css',
})
export class ListVideosComponent {
  listVideos: InfoVideo[] = [];

  constructor(private videosService: VideoService) {}

  ngOnInit(): void {
    this.videosService.getVideos().subscribe((res) => (this.listVideos = res.filter(video=>!video.eliminado)));
  }

  getThumbnail(url: String) {
    return 'https://img.youtube.com/vi/'+idUrl(url)+'/0.jpg';
  }
}

function idUrl(url: String): string {
  // Elimina todo lo que está antes del primer 'v='
  let idVideo = url.split('v=')[1];

  return idVideo;
}