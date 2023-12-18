import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http: HttpClient) {}

  public getDataAPI() {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1');
  }

  public getCharacterAPI(id: string) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}
