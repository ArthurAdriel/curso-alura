const numeros = [1, 2, 3, 4, 5];

let maior = 0
let menor = 5

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
    if (numeros[i] < menor) {
        menor = numeros[i]
    }}

console.log(`O maior número é ${maior} e o menor número é ${menor}`)