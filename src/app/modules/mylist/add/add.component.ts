import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, shareReplay, take } from 'rxjs';
import { DramasService } from 'src/app/core/services/dramas.service';
import { ListService } from 'src/app/core/services/list.service';
import { DramasStore } from 'src/app/core/store/dramas.store';
import { Dramas } from 'src/app/models/dramas.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})


export class AddComponent implements OnInit {

  drama$!: Observable<Dramas>
  drama!: Dramas;

  list: List = {
    src: '',
    cast: '',
    type: '',
    genres: '',
    year: '',
    episodes: '',
    name: '',
    sinopsis: '',
    rating: 0,
  }




  constructor(
    private dramasStore: DramasStore,
    private dramasService: DramasService,
    private service: ListService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.drama$ = this.dramasStore.selectedDrama$.pipe(
      take(1),
      shareReplay()
    )
    const log = this.drama$
    log.subscribe(data => this.drama =data)
   // this.getDrama();
  }

  getDrama(): void {

    const id = this.route.snapshot.paramMap.get('id');
       this.service.getById(parseInt(id!)).subscribe(data => {
         this.drama = data
        }
         );

  }


  add(): void {

      if (this.drama.id == this.list.id ){
        window.alert('Already exists!');
      }
      this.list.id = this.drama.id
      this.list.name =  this.drama.name;
      this.list.sinopsis = this.drama.sinopsis;
      this.list.src = this.drama.src;
      this.list.type = this.drama.type;
      this.list.genres = this.drama.genres;
      this.list.episodes = this.drama.episodes;
      this.list.year = this.drama.year;
      this.list.rating = this.drama.rating;

      this.service.add(this.list).subscribe(() => {
        window.alert('Added to list!');
      });

    }

  }




