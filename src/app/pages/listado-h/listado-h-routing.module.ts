import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoHPage } from './listado-h.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoHPageRoutingModule {}
