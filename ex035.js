const numeros = [100, 200];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

const media = soma / numeros.length;

console.log(`A média dos números é: ${media}`);