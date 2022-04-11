import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake } from 'src/app/model/cake.model';
import { CakesService } from 'src/app/services/cakes.service';

@Component({
  selector: 'app-cake-page',
  templateUrl: './cake-page.component.html',
  styleUrls: ['./cake-page.component.css']
})
export class CakePageComponent implements OnInit {

  cake: Cake = new Cake();
  cakeId: number = NaN;

  constructor(private service: CakesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.cakeId = params['id']
      this.getCake();
    })

  }

  getCake() {
    this.service.getCake(this.cakeId).subscribe({
      next: (cake:any) => {
        this.cake = cake;
        console.log(cake)

      }
    })
  }

}