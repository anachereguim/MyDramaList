import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DramasService } from 'src/app/core/services/dramas.service';
import { DramasStore } from 'src/app/core/store/dramas.store';
import { Dramas } from 'src/app/models/dramas.model';

@Component({
  selector: 'app-jdrama',
  templateUrl: './jdrama.component.html',
  styleUrls: ['./jdrama.component.scss']
})
export class JdramaComponent implements OnInit {

  drama!: Dramas [];



  constructor(
    private service: DramasService,
    private dramasStore: DramasStore,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getJdrama();
  }
  selecionarDrama(drama: Dramas){
    this.dramasStore.setNextValue(drama);
      this.router.navigate([`mylist/add/${drama.id}`]);

  }


  getJdrama(): void {
    this.service.getByType("j").subscribe(drama => {
      this.drama = drama
    });
  }
}
