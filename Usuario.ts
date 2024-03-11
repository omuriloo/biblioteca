import { Livro } from "./Livro"

export class Usuario {
        
    nomeUsuario: string
    id: number
    cpf: number
    emprestados: Livro[]
    reservados: Livro[]
    historicoEmprestimo: Livro[]
    multa: number

    constructor(nomeUsuario: string, id: number, cpf: number, multa: number) {
        this.nomeUsuario = nomeUsuario
        this.id = id
        this.cpf = cpf
        this.emprestados = []
        this.reservados = []
        this.historicoEmprestimo = []
        this.multa = multa
    }
} 
