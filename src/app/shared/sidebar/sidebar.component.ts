import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }
  get Historial(){
    return this.gifsService.historial;
  }
  buscar(hist:string){
    this.gifsService.insertaHistorial(hist)
  }

}
