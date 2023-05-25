import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../Models';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-pesquisa-veiculo',
  templateUrl: './pesquisa-veiculo.component.html',
  styleUrls: ['./pesquisa-veiculo.component.css']
})
export class PesquisaVeiculoComponent implements OnInit {

  listaVeiculos : Veiculo[] =  [];

  nome: string = "";

  constructor(private service: VeiculosService,
              private router: Router){

  }
  ngOnInit(): void {
    this.buscarVeiculos();

   /* this.service.buscarVeiculo(2)
                    .subscribe((veiculo:Veiculo) => {
                        console.log(veiculo);
                    });*/
  }

  buscarVeiculos(){
    this.service.listarVeiculos(this.nome)
    .subscribe((lista:Veiculo[]) => {
        this.listaVeiculos = lista;
    });
  }

  editarVeiculo(id : number){
    this.router.navigate(['/', id]);
  }

}
