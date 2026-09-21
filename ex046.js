function filtrarNumeros(numeros) {
    return numeros.filter((numero) => numero > 5 && numero % 3 === 0);
}

console.log(filtrarNumeros([9, 12, 13, 15, 3, 1, 21]))