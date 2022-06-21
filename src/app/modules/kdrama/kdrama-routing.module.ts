import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdramaComponent } from './kdrama/kdrama.component';

const routes: Routes = [
  {
    path:'kdrama',
    component: KdramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KdramaRoutingModule { }
