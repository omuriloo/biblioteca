import { GeneroLivro } from "./GeneroLivro";
import { StatusLivro } from "./StatusLivro";

export class Livro{

    nomeLivro: string
    genero: GeneroLivro 
    autor: string
    status: StatusLivro
    statusLivro: StatusLivro;

    constructor(nomeLivro: string, genero: GeneroLivro, autor: string, status: StatusLivro){

        this.nomeLivro = nomeLivro
        this.genero = genero
        this.autor = autor
        this.status = status

    }
}