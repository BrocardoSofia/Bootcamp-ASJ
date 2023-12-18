import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../../shared/service-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  apiData: any = [];

  constructor(public apiService: ServiceApiService){}

  ngOnInit(): void {
    this.apiService.getDataAPI().subscribe(data=>{
      this.apiData = data;
    });
  }
  
}
