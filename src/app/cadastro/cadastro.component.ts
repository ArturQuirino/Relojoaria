import { Component } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { Servico } from 'app/servico';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  dataAtual = new Date();
  nome = '';
  preco = '';

  constructor(private cadastrarService: CadastroService) {

  };

  cadastrarServico(nome: string, preco: string) {
    const servico = new Servico();
    servico.nome = nome;
    servico.preco = preco;
    this.cadastrarService.cadastrar(servico);
  }
}
