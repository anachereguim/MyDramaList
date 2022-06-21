import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cdrama',
 loadChildren: () => import('./modules/cdrama/cdrama.module').then(m => m.CdramaModule)

  },
  {
    path: 'jdrama',
 loadChildren: () => import('./modules/jdrama/jdrama.module').then(m => m.JdramaModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'kdrama',
    loadChildren: () => import('./modules/kdrama/kdrama.module').then(m => m.KdramaModule)
  },
  {
    path: 'mylist',
    loadChildren: () => import('./modules/mylist/mylist.module').then(m => m.MylistModule)
  },
  {
    path: 'tdrama',
    loadChildren: () => import('./modules/tdrama/tdrama.module').then(m => m.TdramaModule)
  },
   {
   path: '',
    redirectTo: '/index',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
