import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoHPageRoutingModule } from './listado-h-routing.module';

import { ListadoHPage } from './listado-h.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoHPageRoutingModule
  ],
  declarations: [ListadoHPage]
})
export class ListadoHPageModule {}
