function executaOperacaoEmArray(array, callback) {
    array.forEach((numero) => {
        console.log(callback(numero));
    });
}

const arrayNums = [1, 2, 3, 4];
executaOperacaoEmArray(arrayNums, (numero) => numero * 10);