import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdramaRoutingModule } from './cdrama-routing.module';
import { CdramaComponent } from './cdrama/cdrama.component';


@NgModule({
  declarations: [
    CdramaComponent
  ],
  imports: [
    CommonModule,
    CdramaRoutingModule
  ]
})
export class CdramaModule { }
