import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CORES, Tipo, Veiculo } from '../Models';
import { VeiculosService } from '../veiculos.service';

import * as M from "materialize-css";
import { TiposService } from '../tipos.service';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css']
})
export class CadastroVeiculoComponent implements OnInit {
  @ViewChild('cores') corSelect!: ElementRef;
  @ViewChild('tiposSelect') tipoSelect!: ElementRef;
  @ViewChild('dateAtualizacao') dataAtualizacao!: ElementRef;

  veiculo: Veiculo = {id: 0,
                        nome: '',
                        dataAtualizacao: new Date(2023,0,1),
                        status: true,
                        kmAtual: 0,
                        cor: 'Azul',
                        tipoId: 1 };

  CORES  = CORES;

  tipos: Tipo[] | undefined;

  constructor(private routeActive: ActivatedRoute,
              private servico : VeiculosService,
              private servicoTipo: TiposService) { }

  ngOnInit(): void {

    const codigo = this.routeActive.snapshot.params['id'];

    this.tipos = [];

    console.log("codigo="+codigo);

    this.carregarTipos();

    this.carregarVeiculo(codigo);
  }

  salvar(){
    this.veiculo.dataAtualizacao = this.dataAtualizacao.nativeElement.value;
    console.log(this.veiculo);

    try{
      if(this.update){
        this.servico.atualizarVeiculo(this.veiculo).subscribe((veiculo:Veiculo)=>{
            alert("Veiculo atualizado com sucesso");
        });
      }
      else{
        this.servico.salvarVeiculo(this.veiculo).subscribe((veiculo:Veiculo)=>{
          alert("Veiculo salvo com sucesso");
          this.veiculo = veiculo;
        });
      }
    }
    catch(e){
      console.log(e);
      alert("Erro ao salvar o veículo");
    }
  }

  ngAfterViewInit(): void{
    setTimeout(() => {
      M.FormSelect.init(this.corSelect.nativeElement),100});
    setTimeout(() => {
          var options = {format: 'yyyy-mm-dd', autoClose:true};
          M.Datepicker.init(this.dataAtualizacao.nativeElement, options);
          this.dataAtualizacao.nativeElement.value="2023-01-01"
          ,100
        });
  }

  carregarTipos(){
    this.servicoTipo.listarTipos()
                    .subscribe((tipos:Tipo[])=>{
                        this.tipos = tipos;

                        setTimeout(() => {
                          M.FormSelect.init(this.tipoSelect.nativeElement),100});
                    });
  }

  carregarVeiculo(codigo : number){
    if(codigo){
      this.servico.buscarVeiculo(codigo)
              .subscribe((veiculo)=>{
                  this.veiculo = veiculo;

                  console.log(this.veiculo);
              });
    }
  }

  get update():boolean{
    return this.veiculo && this.veiculo.id > 0;
  }
}
