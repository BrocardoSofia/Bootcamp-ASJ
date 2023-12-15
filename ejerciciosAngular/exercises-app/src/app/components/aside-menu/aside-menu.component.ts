import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.css'
})
export class AsideMenuComponent {

  constructor(private router: Router ) { }
  
  selectedPath(buttonPath: string){
    let currentPath:string = this.router.url;
    let selected = (buttonPath === this.router.url)?true:false
    return selected;
  }
  
}
