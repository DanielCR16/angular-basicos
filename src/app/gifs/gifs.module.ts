import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BuscargifsComponent } from './buscargifs/buscargifs.component';

import { ListargifsComponent } from './listargifs/listargifs.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BuscargifsComponent,
    ListargifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
