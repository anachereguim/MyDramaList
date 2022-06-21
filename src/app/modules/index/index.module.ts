import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    CarouselModule
  ]
})
export class IndexModule { }
