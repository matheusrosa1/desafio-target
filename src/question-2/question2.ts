function proximoElementoA(): number {
  const sequencia = [1, 3, 5, 7];
  const diferenca = 2;
  return sequencia[sequencia.length - 1] + diferenca;
}

function proximoElementoB(): number {
  const sequencia = [2, 4, 8, 16, 32, 64];
  const multiplicador = 2;
  return sequencia[sequencia.length - 1] * multiplicador;
}

function proximoElementoC(): number {
  const sequencia = [0, 1, 4, 9, 16, 25, 36];
  const proximoIndice = sequencia.length;
  return proximoIndice * proximoIndice; // O próximo número será o quadrado do índice
}

function proximoElementoD(): number {
  const sequencia = [4, 16, 36, 64];
  const proximoIndice = (sequencia.length + 1) * 2; // O próximo número é o quadrado de um número par
  return proximoIndice * proximoIndice;
}

function proximoElementoE(): number {
  const sequencia = [1, 1, 2, 3, 5, 8];
  const ultimo = sequencia[sequencia.length - 1];
  const penultimo = sequencia[sequencia.length - 2];
  return ultimo + penultimo; // Soma dos dois últimos números da sequência
}

function proximoElementoF(): number {
  const sequencia = [2, 10, 12, 16, 17, 18, 19];
  return sequencia[sequencia.length - 1] + 1; // Continua a sequência consecutiva
}

console.log('Próximo elemento de A:', proximoElementoA());
console.log('Próximo elemento de B:', proximoElementoB());
console.log('Próximo elemento de C:', proximoElementoC());
console.log('Próximo elemento de D:', proximoElementoD());
console.log('Próximo elemento de E:', proximoElementoE());
console.log('Próximo elemento de F:', proximoElementoF());

// Resposta:
// Próximo elemento de A: 9
// Próximo elemento de B: 128
// Próximo elemento de C: 49
// Próximo elemento de D: 100
// Próximo elemento de E: 13
// Próximo elemento de F: 20