// const prompt = require ('prompt-sync')()

// let nome = prompt ("Digite seu nome" )

// let idade = prompt ("Digite sua idede" )
// console.log(`olá ${nome}, veja que tem ${idade} anos de idade`);
// const prompt = require("prompt-sync")();

// let loginCorreto = "admin";
// let senhaCorreta = "123";
// let tentativas = 0;

// while (tentativas < 5) {
//     let login = prompt("Digite o login: ");
//     let senha = prompt("Digite a senha: ");

//     if (login === loginCorreto && senha === senhaCorreta) {
//         console.log("Login correto!");
//         break;
//     } else {
//         tentativas++;

//         if (tentativas >= 5) {
//             console.log("Login bloqueado");
//         } else {
//             console.log("Login ou senha errados!");
//         }
//     }
// }



// const prompt = require("prompt-sync")();

// let votosJoao = 0;
// let votosMaria = 0;
// let votosCarlos = 0;

// let totalVotos = 0;

// while (totalVotos < 10) {
//     console.log("\nUrna de votação:");
//     console.log("1 - João");
//     console.log("2 - Maria");
//     console.log("3 - Carlos");

//     let voto = prompt("Escolha seu voto: ");

//     if (voto === "1") {
//         votosJoao++;
//         totalVotos++;
//     } 
//     else if (voto === "2") {
//         votosMaria++;
//         totalVotos++;
//     } 
//     else if (voto === "3") {
//         votosCarlos++;
//         totalVotos++;
//     } 
//     else {
//         console.log("Voto inválido! Não contabilizado.");
//     }
// }

// console.log("\nResultado final:");
// console.log("João: " + votosJoao);
// console.log("Maria: " + votosMaria);
// console.log("Carlos: " + votosCarlos);


const {createClient} = require ('@supabase/supabase-js')
const prompt = require ('prompt-sync')()
require('dotenv').config()

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)
console.log('conectado')

async function inserirAutor(){
    let nome = prompt('Digite o nome do autor: ')
    let nascionalidade = prompt('Digite a nascionalidade: ')
    let novoAutor = {
        nome:nome,
        nascionalidade:nascionalidade

    }
    const{data, error} = await supabase.from('biblioteca_autor').insert(novoAutor).select() 
    console.log(data)
    console.log(error)
}
 
inserirAutor()