const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const turmaCompleta = nomesTurmaA.concat(nomesTurmaB);

const nomeProcurado = 'Ana Souza';

const nomeEncontrado = turmaCompleta.find((nome) => nome === nomeProcurado);

if (nomeEncontrado) {
  console.log(`O nome ${nomeProcurado} foi encontrado na turma.`);
} else {
    console.log('O nome não foi encontrado na turma.');
}
