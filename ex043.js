const valores = [10, 20, 30, 40]

const resultado = valores.reduce((acumulador, arrayAtual) => {
    return acumulador + arrayAtual
}, 0)

console.log(resultado)