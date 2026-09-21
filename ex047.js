function soma(numeros) {
    return numeros.reduce((acumulador, numero) => {
        return acumulador + numero
    })
}

console.log(soma([10, 20, 30, 40]))