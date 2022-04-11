import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  data = [
    { img: "../../../assets/images/slideshow/bakery.jpg"},
    { img: "../../../assets/images/slideshow/cakes.jpg" },
    { img: "../../../assets/images/slideshow/world.jpg" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
