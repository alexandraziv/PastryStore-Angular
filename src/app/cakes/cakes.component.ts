import { Component, OnInit } from '@angular/core';
import { Cake } from '../model/cake.model';
import { CakesService } from '../services/cakes.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {
  
  ingredients: String[] = [];
  cakes: Cake[] = [];

  params = {
    filter: {
      ingredients: "",
      name: "",
      sortDirection: "asc"
    },
    page: 1,
    pageSize: "",
  }

  constructor(private service: CakesService) { }

  ngOnInit(): void {
    this.service.getAllIngredients().subscribe({
      next: (ingredients:any) => {
        this.ingredients = ingredients;
      }
    })
    this.getAllOfCakes();

  }

  getAllOfCakes() {
    this.service.getAllCakes(this.params).subscribe({
      next: (cakes: any) => {
        this.cakes = cakes;
      }
    })
  }

  selectIngredients() {
    this.params.page = 1;
    this.getAllOfCakes();
  }

}
