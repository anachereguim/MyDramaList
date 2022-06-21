import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JdramaComponent } from './jdrama/jdrama.component';

const routes: Routes = [
  {
    path: 'jdrama',
    component: JdramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JdramaRoutingModule { }
