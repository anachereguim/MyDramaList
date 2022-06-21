import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DramasService } from 'src/app/core/services/dramas.service';
import { DramasStore } from 'src/app/core/store/dramas.store';
import { Dramas } from 'src/app/models/dramas.model';

@Component({
  selector: 'app-tdrama',
  templateUrl: './tdrama.component.html',
  styleUrls: ['./tdrama.component.scss']
})
export class TdramaComponent implements OnInit {

  drama!: Dramas [];



  constructor(
    private service: DramasService,
    private DramasStore: DramasStore,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTwdrama();
  }
  selecionarDrama(drama: Dramas){
    this.DramasStore.setNextValue(drama);
      this.router.navigate([`mylist/add/${drama.id}`]);

  }

  getTwdrama(): void {
    this.service.getByType("tw").subscribe(drama => {
      this.drama = drama
    });
  }

}
