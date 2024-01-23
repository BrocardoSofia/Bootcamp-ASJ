import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { InfoVideo } from '../models/InfoVideo';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private url:string =  'http://localhost:8080/infovideos';

  constructor(private http: HttpClient) { }

  public getVideos():Observable<InfoVideo[]>{
    return this.http.get<InfoVideo[]>(this.url)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(()=> new Error(error.message));
  }

  public getVideoById(id: number):Observable<InfoVideo>{
    const urlDelete = this.url+'/'+id;
    return this.http.get<InfoVideo>(urlDelete)
    .pipe(
      catchError(this.handleError)
    )
  }

  public postVideo(video: InfoVideo):Observable<InfoVideo[]>{
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<InfoVideo[]>(this.url,video,{headers});
  }

  public deleteVideo(video: InfoVideo):Observable<InfoVideo[]>{
    const urlDelete = this.url+'/'+video.id;
    return this.http.delete<InfoVideo[]>(urlDelete);
  }

  public updateVideo(video: InfoVideo):Observable<InfoVideo[]>{
    const urlDelete = this.url+'/'+video.id;
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<InfoVideo[]>(urlDelete,video,{headers});
  }

}
