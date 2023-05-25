import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Veiculo } from './Models';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  urlBase = environment.urlBase+'/veiculos';
  constructor(
    private httpClient : HttpClient
  ) {

   }

   listarVeiculos(nome: string){
      let params = new HttpParams();
      if(nome){
        params = params.append("nome_like",nome);
      }
      return this.httpClient.get<Veiculo[]>(this.urlBase, {params});
   }

   buscarVeiculo(id:number){
      return this.httpClient.get<Veiculo>(this.urlBase+"/"+id);
   }

   salvarVeiculo(veiculo:Veiculo){
      return this.httpClient.post<Veiculo>(this.urlBase, veiculo);
   }

   atualizarVeiculo(veiculo:Veiculo){
    return this.httpClient.put<Veiculo>(this.urlBase+"/"+veiculo.id, veiculo);
  }

  removerVeiculo(id:number){
    return this.httpClient.delete<Veiculo>(this.urlBase+"/"+id);
  }
}
