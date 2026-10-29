function mostrarInfoPessoa(objeto) {
    console.log(`O nome da pessoa é ${objeto.nome}, tem ${objeto.idade} anos de idade, ${objeto.solteiro ? "Solteiro" : "Casado"}, seus hobbies são ${objeto.hobbies}, ele mora na rua ${pessoa.endereco.rua}, cidade de ${pessoa.endereco.cidade}, em ${pessoa.endereco.estado}`);
}

const pessoa = {
    nome: "Everson",
    idade: 35,
    solteiro: false,
    hobbies: [
        "jogar bola", " jogar video game", " ler livro"
    ]
}

pessoa.endereco = {
    rua: "Rei das Alterosas",
    cidade: "Vespasiano",
    estado: "Minas Gerais"
}

mostrarInfoPessoa(pessoa)