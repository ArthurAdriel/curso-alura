function descobrirParouImpar(array) {
    return array.filter((numero) => numero % 2 === 0);
}

console.log(descobrirParouImpar([1,2,3,4,5,6,7,8]));