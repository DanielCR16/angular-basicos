
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsRespomse } from '../interface/SearchGifsRespomse.interface';


@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apiKey:string="8fc3VKkBd52IRz4PmOy58h3JP46bn2T2";
  private _historial:string[]=[];
  private url:string="https://api.giphy.com/v1/gifs"
  //TODO: cambiar any por su tipo correspondiente
  public resultados:Gif[] =[];

  get historial(){

    return [...this._historial];
  }

  constructor(private http:HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  insertaHistorial(dato:string){
    dato = dato.trim().toLocaleLowerCase();
    if(!this._historial.includes(dato)){
      this._historial.unshift(dato);
      this._historial=this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify( this._historial )  );
    }

   const params= new HttpParams()
   .set("api_key",this.apiKey)
   .set("limit","10")
   .set("q",dato)

   this.http.get<SearchGifsRespomse>(`${this.url}/search`,{params:params})
            .subscribe((resp)=>{
                console.log(resp.data);
                this.resultados=resp.data;
                localStorage.setItem('resultados', JSON.stringify( this.resultados )  );
            });
  }

}
