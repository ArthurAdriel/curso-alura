function mostrarInfoPessoa(objeto) {
    console.log(`O nome da pessoa é ${objeto.nome}, tem ${objeto.idade} anos de idade, ${objeto.solteiro ? "Solteiro" : "Casado"}, seus hobbies são ${objeto.hobbies}`);
}

const pessoa = {
    nome: "Everson",
    idade: 35,
    solteiro: false,
    hobbies: [
        "jogar bola", "jogar video game", "ler livro"
    ]
}

mostrarInfoPessoa(pessoa)
