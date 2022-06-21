import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MylistRoutingModule } from './mylist-routing.module';
import { AddComponent } from './add/add.component';
import { MylistComponent } from './mylist/mylist.component';
import { UpdateComponent } from './update/update.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AddComponent,
    MylistComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    MylistRoutingModule,
    RatingModule,
    FormsModule,
    TableModule
  ]
})
export class MylistModule { }
