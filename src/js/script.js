// Declarações
let nome = "FIAP";
const idade = 30;
let altura = 1.75;
let estudante = true;

console.log(nome, altura, estudante, idade);

// métodos de exibição
// alert("Bem-vindo ao Sistema");

// let desejaContinuar = confirm("Deseja continuar")
// console.log("Resposta", desejaContinuar)

// Operadores Aritméticos, comparação e lógicos
let soma = 10;
let b = "10"
console.log(soma == b); // == Comparação
console.log(soma === b); // === False
console.log(soma >= b); // True

// 
let idadeTem = 12;
let habilitacao = true;
let dirigir = (idadeTem >= 18) && habilitacao;
console.log("O usuário pode dirigir?", dirigir)

// Condicional
if (false) {
    console.log("É VERDADEIRO")
}

if(true) {
    console.log("Verdadeiro");
} else {
    console.log("False");
}

// if / if else / else encadeado

let nota = 2;
if (nota >= 8) {
    console.log("Aprovado");
} else if (nota >= 6) {
    console.log("Ficou de exame");
} else {
    console.log("Reprovado!");
}

// Switch Case
let diaSemana = 3;
switch(diaSemana) {
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    default:
        console.log("Outro Dia")
}

// Ternário
// let notaUsuario = (nota >= 6) ? "Aprovado!" : "Reprovado!";
// console.log(notaUsuario);

let jogada = 6;

let resultado = jogada <= 5 ? "Ruim" :
                jogada > 5 && jogada <= 7 ? "Boa" :
                "Excelente";
console.log(resultado);

// FOR
