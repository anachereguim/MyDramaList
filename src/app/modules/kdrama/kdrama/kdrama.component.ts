import { Component, OnInit } from '@angular/core';
import { Dramas } from 'src/app/models/dramas.model';
import { DramasStore } from 'src/app/core/store/dramas.store';
import { Router } from '@angular/router';
import { DramasService } from 'src/app/core/services/dramas.service';


@Component({
  selector: 'app-kdrama',
  templateUrl: './kdrama.component.html',
  styleUrls: ['./kdrama.component.scss']
})
export class KdramaComponent implements OnInit {

  drama!: Dramas [];


  constructor(
    private service: DramasService,
    private dramasStore: DramasStore,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getKdrama();

  }

  selecionarDrama(drama: Dramas){
    this.dramasStore.setNextValue(drama);
      this.router.navigate([`mylist/add/${drama.id}`]);

  }

  getKdrama(): void {
    this.service.getByType("k").subscribe(drama => {
      this.drama = drama
    });
  }




}
