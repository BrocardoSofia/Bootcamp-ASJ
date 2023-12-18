import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceApiService } from '../../shared/service-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  idCharacter: any = '';
  characterData : any = '';

  constructor(private route: ActivatedRoute, public apiService: ServiceApiService){}

  ngOnInit(): void {
    this.idCharacter = this.route.snapshot.params['idCharacter'];

    this.apiService.getCharacterAPI(this.idCharacter).subscribe(data=>{
      this.characterData = data;
    });
  }

  
}
