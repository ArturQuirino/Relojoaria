import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servico } from '../servico';

@Injectable()
export class CadastroService {

  constructor(private http: HttpClient) { }

  public cadastrar(servico: Servico) {
    this.http.post('https://relojoaria.herokuapp.com/servico', servico);
  }
}
