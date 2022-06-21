import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JdramaRoutingModule } from './jdrama-routing.module';
import { JdramaComponent } from './jdrama/jdrama.component';


@NgModule({
  declarations: [
    JdramaComponent
  ],
  imports: [
    CommonModule,
    JdramaRoutingModule
  ]
})
export class JdramaModule { }
