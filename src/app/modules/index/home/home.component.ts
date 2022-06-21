import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DramasService } from 'src/app/core/services/dramas.service';
import { DramasStore } from 'src/app/core/store/dramas.store';
import { Dramas } from 'src/app/models/dramas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  drama!: Dramas[];
  responsiveOptions;

  constructor(
    private service: DramasService,
    private dramasStore: DramasStore,
    private router: Router
  ) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5,
          numScroll: 5
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  selecionarDrama(drama: Dramas){
    this.dramasStore.setNextValue(drama);
      this.router.navigate([`mylist/add/${drama.id}`]);

  }

  ngOnInit(): void {
    this.service.getAll().subscribe(drama => {
			this.drama = drama;
		});
  }


}
