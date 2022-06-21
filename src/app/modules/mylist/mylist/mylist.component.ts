import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DramasService } from 'src/app/core/services/dramas.service';
import { ListService } from 'src/app/core/services/list.service';
import { DramasStore } from 'src/app/core/store/dramas.store';
import { List } from 'src/app/models/list.model';
import { Dramas } from 'src/app/models/dramas.model';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {

  filteredString: string = '';
  drama!: Dramas;
  list!: List [];



  constructor(
    private service: ListService,
    private dramasStore: DramasStore,
    private dramasService: DramasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDrama();
    this.getList();

  }
  getDrama(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== undefined && id !== null){
       this.service.getById(parseInt(id)).subscribe(data => this.drama = data);
    }
  }

  getList(): void {
    this.service.getAll().subscribe(list => {
      this.list = list.sort((a,b) => {
        return b.rating! - a.rating!
        });
    });
  }



  setValue(list: List) {
    const id = list.id;
    if(id !== null && id !== undefined){
      this.service.update(list, id).subscribe(() => {
      window.alert('Ok!');
      location.reload();

    });
    }

  }



  remove(list: List): void {
    this.service.delete(list.id!).subscribe(() => {
      window.alert('The drama has been delected from your list!');
      location.reload();
    });
  }
}
