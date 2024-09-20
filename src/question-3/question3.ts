
const faturamentoDiario: number[] = [
    200.50,  
    0,       
    150.75,  
    300.00,  
    0,       
    250.20,  
    0,       
    320.10,  
    0,       
    200.00,  
    350.00,  
    400.50,  
    0,       
    275.30,  
    0,       
    450.75,  
    0,       
    300.00,  
    0,       
    600.00,  
    0,       
    320.00,  
    250.50,  
    0,       
    180.00,  
    0,       
    330.00,  
    400.00,  
    0,       
    290.00,  
];

interface ResultadoFaturamento {
    menorFaturamento: number;
    maiorFaturamento: number;
    diasAcimaDaMedia: number;
}

function calcularFaturamento(faturamento: number[]): ResultadoFaturamento {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    for (const valor of faturamento) {
        if (valor > 0) {
            menorFaturamento = Math.min(menorFaturamento, valor);
            maiorFaturamento = Math.max(maiorFaturamento, valor);
            somaFaturamento += valor;
            diasComFaturamento++;
        }
    }

    const mediaFaturamento = diasComFaturamento > 0 ? somaFaturamento / diasComFaturamento : 0;

    const diasAcimaDaMedia = faturamento.filter(valor => valor > mediaFaturamento).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia,
    };
}

const resultado = calcularFaturamento(faturamentoDiario);
console.log('Menor faturamento:', resultado.menorFaturamento);
console.log('Maior faturamento:', resultado.maiorFaturamento);
console.log('Dias acima da média:', resultado.diasAcimaDaMedia);
