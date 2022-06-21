import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DramasService } from 'src/app/core/services/dramas.service';
import { DramasStore } from 'src/app/core/store/dramas.store';
import { Dramas } from 'src/app/models/dramas.model';


@Component({
  selector: 'app-cdrama',
  templateUrl: './cdrama.component.html',
  styleUrls: ['./cdrama.component.scss']
})
export class CdramaComponent implements OnInit {

  drama!: Dramas [];



  constructor(
    private service: DramasService,
    private dramasStore: DramasStore,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCdrama();
  }

  selecionarDrama(drama: Dramas){
    this.dramasStore.setNextValue(drama);
      this.router.navigate([`mylist/add/${drama.id}`]);

  }

  getCdrama(): void {
    this.service.getByType("c").subscribe(drama => {
      this.drama = drama
    });
  }
}
