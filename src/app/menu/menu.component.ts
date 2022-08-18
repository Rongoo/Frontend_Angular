import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  name:string|null

  constructor() {
    this.name=sessionStorage.getItem('authenticatedUser')
   }

  ngOnInit(): void {
  }

}
