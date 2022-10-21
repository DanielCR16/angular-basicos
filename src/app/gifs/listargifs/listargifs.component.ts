import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-listargifs',
  templateUrl: './listargifs.component.html',
  styles: [
  ]
})
export class ListargifsComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  get resultados(){
    return this.gifsService.resultados;
  }
  ngOnInit(): void {
  }

}
