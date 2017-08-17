import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'menu-comp',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu('home', 'HOME', true, 'The Home Page'),
    new Menu('resume', 'RESUME', false, 'The Resume Page'),
    new Menu('about', 'ABOUT', true, 'The About Page')
  ];

  constructor() { }

  ngOnInit() {
  }

}
