import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { MylistComponent } from './mylist/mylist.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: 'mylist',
    component: MylistComponent
  },
  {
    path: 'add/:id',
    component: AddComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MylistRoutingModule { }
