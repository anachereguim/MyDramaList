import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdramaComponent } from './cdrama/cdrama.component';

const routes: Routes = [
  {
    path:'cdrama',
    component: CdramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdramaRoutingModule { }
