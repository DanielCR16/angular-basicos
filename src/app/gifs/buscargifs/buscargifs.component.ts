import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscargifs',
  templateUrl: './buscargifs.component.html',
  styles: [
  ]
})
export class BuscargifsComponent implements OnInit {
 @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  buscar(){
    const dato = this.txtBuscar.nativeElement.value
    if(dato.trim().length===0){return;}
  console.log(dato)
    this.gifsService.insertaHistorial(dato);
     this.txtBuscar.nativeElement.value="";
  }

}
