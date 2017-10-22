import { Component, HostBinding } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})


export class ConsultaComponent {
    displayedColumns = ['codigo', 'nome', 'CPF', 'data'];
    dataSource = new ExampleDataSource();
}

export interface Element {
    codigo: number;
    nome: string;
    CPF: string;
    data: Date;
}

 const dadosTabela: Element[] = [
    {codigo: 1, nome: 'Artur Pires Quirino', CPF: '1.0079', data: new Date()},
    {codigo: 2, nome: 'Heliton Quirino Câmara', CPF: '4.0026', data: new Date()}
];

export class ExampleDataSource extends DataSource<any> {
/** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Element[]> {
        return Observable.of(dadosTabela);
    }

    disconnect() {}
}
