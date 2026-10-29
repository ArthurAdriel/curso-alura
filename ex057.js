function mostrarListaPessoas(pessoas) {
    for(let i = 0; i < pessoas.length; i++){
        console.log(`Nome: ${pessoas[i].nome}, Idade: ${pessoas[i].idade}, Cidade: ${pessoas[i].cidade}`)
    }
}

function filtrarPorCidade(pessoas) {
    const pessoasDeLA = pessoas.filter(pessoa => pessoa.cidade === "Los Angeles");
    console.log(pessoasDeLA)
}

const pessoas = [
    {
        nome: "Frank",
        idade: "39",
        cidade: "Los Angeles"
    },
    {
        nome: "Travis",
        idade: "30",
        cidade: "Los Angeles"
    },
    {
        nome: "Drake",
        idade: "40",
        cidade: "Vancouver"
    }
]

pessoas.push({
    nome: "Kendrick",
    idade: "38",
    cidade: "Compton"
})

mostrarListaPessoas(pessoas)
filtrarPorCidade(pessoas)