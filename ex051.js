const livro = {
    nome: "A casa das palavras",
    autor: "Marina Colasanti",
    anoPublicacao: 2002,
    genero: "Crônicas",
    anoAtual: new Date().getFullYear(),
};

livro.idadePublicacao = livro.anoAtual - livro.anoPublicacao

console.log(livro["nome"], livro["autor"], livro["anoPublicacao"], livro["genero"], livro["idadePublicacao"])