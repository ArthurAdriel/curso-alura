function verificaPalindromo(palavra){
    if (palavra === palavra.split("").reverse().join("")){
        return `A palavra ${palavra} é um palíndromo!`;
    } else {
        return `A palavra ${palavra} não é um palíndromo!`;
    }
}

console.log(verificaPalindromo("Natan"))