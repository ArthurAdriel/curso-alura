function encontrarNumero(array, numero) {
    return array.indexOf(numero);
}

const numeros = [1, 2, 3, 4, 5];

console.log(encontrarNumero(numeros, 3)); // Saída: 2
console.log(encontrarNumero(numeros, 6)); // Saída: -1