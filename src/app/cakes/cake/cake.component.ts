import { Component, Input, OnInit } from '@angular/core';
import { Cake } from 'src/app/model/cake.model';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  @Input() cake: Cake = new Cake();

  constructor() { }

  ngOnInit(): void {
  }

  changeRoute() { }

}
