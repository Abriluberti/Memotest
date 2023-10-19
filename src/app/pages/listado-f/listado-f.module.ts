import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoFPageRoutingModule } from './listado-f-routing.module';

import { ListadoFPage } from './listado-f.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoFPageRoutingModule
  ],
  declarations: [ListadoFPage]
})
export class ListadoFPageModule {}
