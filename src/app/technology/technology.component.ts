import { Component, OnInit } from '@angular/core';
import { Technology } from './technology';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  addtechnology: Technology;

  technology: Technology[] = [
    new Technology(1, "Git Bash / Git Hub", "A Tool that lets you backup your work (Code) via the cloud through command line to Github.com", "Wasn't that hard to learn it and its being used everyday", "Good"),
    new Technology(2, "HTML", "is used to create a website and displays it on a browser", "Not that hard to reference the things you need to create a HTML file", "Good"),
    new Technology(3, "CSS", "A way to style buttons, forms, link..ect", "Very useful to style tags idenpendtly or as a whole", "Good"),
    new Technology(4, "Javascript", "A way to write script to make your website function the way you want it to", "Still a lot more to learn", "Good"),
    new Technology(5, "jQuery", "Another Library apose to Javascript", "Still learning more ways to use jQuery", "Good"),
    new Technology(6, "Typescript", "A superset of Javascript", "I like TS better than Javascript as its easier to read and format code", "Beginner"),
    new Technology(7, "Bootstrap", "A framework use to design/style website with pre-configed class", "Its a lot easier to style a way with Bootstrap and combine it with CSS", "Beginner"),
    new Technology(8, "Angular 4", "A Front End Framework to create website", "Still very new to Angular, but its pretty awesome so far", "Beginner")
  ];


  constructor() { }

  ngOnInit() {
  }

}
