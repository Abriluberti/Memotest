import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoFPage } from './listado-f.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoFPageRoutingModule {}
