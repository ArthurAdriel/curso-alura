function retornarArrays(...arrays) {
    return arrays.reduce((acumulador, arrayAtual) => {
        return [...acumulador, ...arrayAtual];
    }, [])
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const resultados = retornarArrays(array1, array2, array3);
console.log(resultados);