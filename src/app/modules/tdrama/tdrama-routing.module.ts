import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdramaComponent } from './tdrama/tdrama.component';

const routes: Routes = [
  {
    path:'tdrama',
    component: TdramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdramaRoutingModule { }
