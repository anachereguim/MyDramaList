import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdramaRoutingModule } from './tdrama-routing.module';
import { TdramaComponent } from './tdrama/tdrama.component';


@NgModule({
  declarations: [
    TdramaComponent
  ],
  imports: [
    CommonModule,
    TdramaRoutingModule
  ]
})
export class TdramaModule { }
