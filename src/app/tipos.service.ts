import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tipo } from './Models';

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  urlBase = environment.urlBase+'/tipos';
  constructor(
    private httpClient : HttpClient
  ) {

   }

  listarTipos(){
    return this.httpClient.get<Tipo[]>(this.urlBase);
  }

}
