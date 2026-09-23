const prompt = require('prompt-sync')();

const livro = {
    nome: "A casa das palavras",
    autor: "Marina Colasanti",
    anoPublicacao: 2002,
    genero: "Crônicas",
    anoAtual: new Date().getFullYear(),
    avaliacao: 10
};

livro.idadePublicacao = livro.anoAtual - livro.anoPublicacao

if (livro.avaliacao === null) {
    livro.avaliacao = prompt("Qual a avaliação do livro? ")
} else {
    console.log("O livro já possui uma avaliação.")
}

console.log(livro)

