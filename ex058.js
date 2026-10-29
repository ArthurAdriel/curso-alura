const calculadora = {
    soma: function(n1, n2) {
    return n1 + n2;
    },

    subtracao: function(n1, n2) {
        return n1 - n2;
    },

    multiplicacao: function(n1, n2) {
    return n1 * n2
    },

    divisao: function(n1, n2) {
    if (n1 === 0 || n2 === 0) {
        return "Um dos números é 0."
    } else {
        return n1 / n2
    }}
};



console.log(calculadora.soma(10,3));
console.log(calculadora.subtracao(15,2));
console.log(calculadora.multiplicacao(13,1));
console.log(calculadora.divisao(26,2));
