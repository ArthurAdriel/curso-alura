const livro = {
    nome: "A casa das palavras",
    autor: "Marina Colasanti",
    anoPublicacao: 2002,
    genero: "Crônicas"
};

livro.anoAtual = new Date().getFullYear()
livro.idadePublicacao = livro.anoAtual - livro.anoPublicacao
livro.mostrarDetalhes = `O nome do livro é ${livro.nome} da autora ${livro.autor}, o ano de publicação dele foi ${livro.anoPublicacao}, que já faz ${livro.idadePublicacao} anos, e o livro é do gênero ${livro.genero}`

console.log(livro.mostrarDetalhes)