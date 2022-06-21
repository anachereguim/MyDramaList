import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KdramaRoutingModule } from './kdrama-routing.module';
import { KdramaComponent } from './kdrama/kdrama.component';


@NgModule({
  declarations: [
    KdramaComponent
  ],
  imports: [
    CommonModule,
    KdramaRoutingModule,

  ]
})
export class KdramaModule { }
