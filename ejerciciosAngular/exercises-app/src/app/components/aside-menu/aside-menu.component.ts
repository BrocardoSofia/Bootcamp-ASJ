import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.css'
})
export class AsideMenuComponent{

  constructor(private router: Router ) { }
  
  selectedPath(buttonPath: string):boolean{
    return buttonPath === this.router.url;
  }
  
}
