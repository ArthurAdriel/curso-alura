const livro = {
    nome: "A casa das palavras",
    autor: "Marina Colasanti",
    anoPublicacao: 2002,
    genero: "Crônicas",
    anoAtual: new Date().getFullYear(),
    avaliacao: 10
};

livro.idadePublicacao = livro.anoAtual - livro.anoPublicacao

delete livro.avaliacao

console.log(livro)