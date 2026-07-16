let saldo = 100;
let saque = 13;
let deposito = 50;
let operacao = saldo - saque;
saldo = operacao;
console.log(`Você sacou R$${saque} e ficou com R$${saldo} na conta.`);
operacao = saldo + deposito;
saldo = operacao
console.log(`Você depositou R$${deposito} e ficou com R$${saldo} na conta.`)