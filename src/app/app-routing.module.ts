import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { PesquisaVeiculoComponent } from './pesquisa-veiculo/pesquisa-veiculo.component';

const routes: Routes = [
  { path: 'new', component: CadastroVeiculoComponent },
  { path: ':id', component: CadastroVeiculoComponent },
  { path: '', component: PesquisaVeiculoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
