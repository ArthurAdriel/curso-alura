function verificacaoIdade(idade){
    if (idade >= 18) {
        return "Você é maior de idade!"
    } else {
        return "Você é menor de idade!"
    }
}console.log(verificacaoIdade(13))