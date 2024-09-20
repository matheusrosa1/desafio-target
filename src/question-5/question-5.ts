const distanciaTotal = 125; // km
const velocidadeCarro = 90; // km/h
const velocidadeCaminhao = 80; // km/h
const pedagios = 3;
const tempoPedagio = 5; // minutos

// Calcula a velocidade total
const velocidadeTotal = velocidadeCarro + velocidadeCaminhao;

// Calcula o tempo até o encontro em horas
const tempoEncontroHoras = distanciaTotal / velocidadeTotal;
const tempoEncontroMinutos = tempoEncontroHoras * 60;

// Calcula o tempo total do carro considerando pedágios
const tempoTotalCarro = tempoEncontroMinutos + (pedagios * tempoPedagio);

// Distância percorrida até o encontro
const distanciaCarro = velocidadeCarro * (tempoTotalCarro / 60);
const distanciaCaminhao = velocidadeCaminhao * (tempoEncontroMinutos / 60);

// Distâncias até Ribeirão Preto
const distanciaCarroRibeirao = distanciaTotal - distanciaCarro;
const distanciaCaminhaoRibeirao = distanciaTotal - distanciaCaminhao;

console.log(`Distância do carro até Ribeirão Preto: ${distanciaCarroRibeirao.toFixed(2)} km`);
console.log(`Distância do caminhão até Ribeirão Preto: ${distanciaCaminhaoRibeirao.toFixed(2)} km`);

if (distanciaCarroRibeirao < distanciaCaminhaoRibeirao) {
    console.log("O carro estará mais próximo de Ribeirão Preto.");
} else {
    console.log("O caminhão estará mais próximo de Ribeirão Preto.");
}

// Resposta: O carro estará mais próximo de Ribeirão Preto.