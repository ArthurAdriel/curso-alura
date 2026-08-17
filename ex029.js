const matriz = [
    [ [], [], [] ],
    [ [], [], [] ],
    [ [], [], [] ]
];

let numero = 1;

for (let i = 0; i < 3; i++) {
    for (let p = 0; p < 3; p++) {
        matriz[i][p].push(numero);
        numero++;                  
    }
}

console.log(matriz);
console.log(matriz[1][2])
matriz[2][1].push(13);
console.log(matriz);