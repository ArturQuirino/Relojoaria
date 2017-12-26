export class Servico {
    nome: string;
    preco: string;
    data: Date;

    constructor() {
        this.nome = '';
        this.preco = '';
        this.data = new Date();
    }
}