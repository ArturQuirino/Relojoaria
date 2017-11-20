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
    displayedColumns = ['codigo', 'nome', 'data', 'pronto'];
    dataSource = new ExampleDataSource();
}

export interface Element {
    codigo: number;
    nome: string;
    data: Date;
    pronto: boolean;
}

 const dadosTabela: Element[] = [
    {codigo: 1, nome: 'Artur Pires Quirino', data: new Date(), pronto: true},
    {codigo: 2, nome: 'Heliton Quirino Câmara', data: new Date(), pronto: false}
];

export class ExampleDataSource extends DataSource<any> {
/** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Element[]> {
        return Observable.of(dadosTabela);
    }

    disconnect() {}
}
