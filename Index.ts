import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { GeneroLivro } from "./GeneroLivro";
import { StatusLivro } from "./StatusLivro";


class Biblioteca {
    livros:Livro[]
    usuarios: Usuario[]
    status: StatusLivro;
    genero: GeneroLivro;

    constructor(){
        this.livros =  []
        this.usuarios = []
    }

    livrosDisponiveis(): void{
        if (this.status === StatusLivro.DISPONIVEL) {
            console.log(`Livros disponíveis: ${this.livros}`)
        }else{
            console.log("Erro")
        }
    }
    
    listaEmprestados(): void{
        if (this.status === StatusLivro.EMPRESTADO) {
            console.log(`Livros emprestados: ${this.livros}`)
        }else{
            console.log("Erro")
        }
    }
    
    listaAtrasados(): void{
        if (this.status === StatusLivro.ATRASADO) {
            console.log(`Livros atrasados: ${this.livros}`)
        }else{
            console.log("Erro")
        }
    }

    cadastroUsuario(usuarios): void{
            this.usuarios.push(usuarios)
    }
    
    historicoEmprestimo(id: Usuario): void {
        let historicoUsuario = id.historicoEmprestimo
 
        console.log(`Empréstimos do usuario: ${id.nomeUsuario}`)
        console.log(historicoUsuario);
    }

    emprestimoLivro(livros: Livro, usuario: Usuario): void {
        if (livros.statusLivro === StatusLivro.DISPONIVEL) {
            livros.statusLivro = StatusLivro.EMPRESTADO;

            usuario.historicoEmprestimo.push(livros);
            console.log(`${livros.nomeLivro} emprestado.`)
        } else {
            console.log(`Livro indisponível`)
        }
    }

    reserva(livro: Livro, usuario: Usuario):void {

        if (livro.statusLivro === StatusLivro.DISPONIVEL) {
            livro.statusLivro = StatusLivro.RESERVADO;
            console.log(`Livro reservado.`)

        } else {
            console.log(`Livro indisponível.`)
        }
    }

    verMulta(diasAtrasados: number):void {
        const valorMulta: number = 10
        const valorTotal: number = diasAtrasados * valorMulta
        console.log(`dias atrasados: ${diasAtrasados}, valor total da multa: R$${valorTotal}.`)

    }

    listaGenero(): void{
        if (this.genero === GeneroLivro.ROMANCE) {
            console.log(`Livros de romance: ${this.genero === GeneroLivro.ROMANCE}`)
        }else if(this.genero === GeneroLivro.TERROR){
            console.log(`Livros de terror: ${this.genero === GeneroLivro.TERROR}`)
        }else if(this.genero === GeneroLivro.SUSPENSE){
            console.log(`Livros de suspense: ${this.genero === GeneroLivro.SUSPENSE}`)
        }else if(this.genero === GeneroLivro.COMEDIA){
            console.log(`Livros de comedia: ${this.genero === GeneroLivro.COMEDIA}`)
        }else if(this.genero === GeneroLivro.DISTOPIA){
            console.log(`Livros de distopia: ${this.genero === GeneroLivro.DISTOPIA}`)
        }
    }
}

let rl = require('readline-sync')

let novaBiblioteca = new Biblioteca()

const livro1 = new Livro ("Jogos Vorazes", GeneroLivro.DISTOPIA, "Suzanne Collins", StatusLivro.DISPONIVEL);
const livro2 = new Livro ("É assim que acaba", GeneroLivro.ROMANCE, "Colleen Hoover", StatusLivro.DISPONIVEL);
const livro3 = new Livro ("O diário de chaves", GeneroLivro.COMEDIA, "Roberto Gómez", StatusLivro.RESERVADO);
const livro4 = new Livro ("It a coisa", GeneroLivro.TERROR, "Stephen King", StatusLivro.EMPRESTADO);
const livro5 = new Livro ("O homem de giz", GeneroLivro.SUSPENSE, "C.J. Tudor", StatusLivro.ATRASADO);

const usuario1 = new Usuario('Isadora Vargas', 26, 23875688082, 22);
const usuario2 = new Usuario('Murilo Rihan', 8, 12309865477, 0);
const usuario3 = new Usuario('Arthur Henrique', 27, 12770688880, 66);
const usuario4 = new Usuario('Gaia Silveira', 4, 33875688082, 40);
const usuario5 = new Usuario('Rosangela Vianna', 24, 43875688082, 1000);

function menu() {
    console.clear()
    
    console.log('1: Livro Disponível ');
    console.log('2: Livro Emprestado ');
    console.log('3: Livro Atrasado ');
    console.log('4: Cadastro de Usuários ');
    console.log('5: Histórico de Empréstimos ');
    console.log('6: Empréstimo de livro ');
    console.log('7: Reservar Livro ');
    console.log('8: Ver Multa ');
    console.log('9: Ver Livros por Gênero ');
    console.log('10: Encerrar sessão');
}
let opcao = rl.questionInt('Digite uma opção')

switch (opcao) {

    case 1:
        console.clear()
        console.log(novaBiblioteca.livrosDisponiveis()); 
        break;


    case 2:
        console.clear()
        console.log(novaBiblioteca.listaEmprestados())
        break;

    case 3:
        console.clear()
        console.log(novaBiblioteca.listaAtrasados())
        break;

    case 4:
        console.clear()

        const nome = rl.question('Digite o nome do usuário: ')
        const id = rl.questionInt('Digite o ID do usuário: ')
        const contato = rl.questionInt('Digite o contato do usuário: ')
        let newUser = new Usuario(nome, id, contato, 0)

        novaBiblioteca.cadastroUsuario(newUser)
        break;

    case 5:
        console.clear()

        const idUsuário = rl.questionInt('Digite o ID do usuário: ')
        novaBiblioteca.historicoEmprestimo(idUsuário)
        break;

    case 6:
        console.clear()

        const livros = rl.question('Digite o nome do livro: ')
        const usuario = rl.question("Digite o nome do usuário: ")
        novaBiblioteca.emprestimoLivro(livros, usuario)
        break;        
        

    case 7:
        console.clear()

        const nomeLivro = rl.question('Digite o nome do livro: ')
        const nomeUsuario = rl.question("Digite o nome do usuário: ")
        novaBiblioteca.reserva(nomeLivro, nomeUsuario)
        break;

    case 8:
        console.clear()

        const atraso = rl.questionInt('Quantos está atrasado a entrega: ')
        novaBiblioteca.verMulta(atraso)
        break;
        
    case 9:
        console.clear()

        const generoLivro: string = rl.question('Digite o gênero que deseja procurar: ');
        console.log(novaBiblioteca.listaGenero)
        break;
  
    case 10:
        while(false)
        break;

    default:
        console.log('Erro.')
        break;
}

while (true) {
menu()
}