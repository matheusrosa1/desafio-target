function proximoElementoA() {
  const sequencia = [1, 3, 5, 7];
  const diferenca = 2;
  return sequencia[sequencia.length - 1] + diferenca;
}

function proximoElementoB() {
  const sequencia = [2, 4, 8, 16, 32, 64];
  const multiplicador = 2;
  return sequencia[sequencia.length - 1] * multiplicador;
}

function proximoElementoC() {
  const sequencia = [0, 1, 4, 9, 16, 25, 36];
  const proximoIndice = sequencia.length;
  return proximoIndice * proximoIndice; 
}

function proximoElementoD() {
  const sequencia = [4, 16, 36, 64];
  const proximoIndice = (sequencia.length + 1) * 2;
  return proximoIndice * proximoIndice;
}

function proximoElementoE() {
  const sequencia = [1, 1, 2, 3, 5, 8];
  const ultimo = sequencia[sequencia.length - 1];
  const penultimo = sequencia[sequencia.length - 2];
  return ultimo + penultimo;
}

function proximoElementoF() {
  const sequencia = [2, 10, 12, 16, 17, 18, 19];
  return sequencia[sequencia.length - 1] + 1;
}

console.log('Próximo elemento de A:', proximoElementoA());
console.log('Próximo elemento de B:', proximoElementoB());
console.log('Próximo elemento de C:', proximoElementoC());
console.log('Próximo elemento de D:', proximoElementoD());
console.log('Próximo elemento de E:', proximoElementoE());
console.log('Próximo elemento de F:', proximoElementoF());
