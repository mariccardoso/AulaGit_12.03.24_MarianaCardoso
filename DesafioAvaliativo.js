
// Solicitar os dois números 
let a = 90;
let b = 50;

// Determinar o inicio e o fim: inicio sempre o menor número e o fim o maior
let inicio = a;
let fim = b;

if (inicio < fim) {
    inicio = a;
    fim = b;

} else {
    inicio = b;
    fim = a;
}

// Fazer a operação (total de números ímpares, soma e sequencia)
let total = 0;
let soma = 0;
for (let i = inicio; i <= fim; i++) {
    // Se o resto da divisão (%) por 2 for diferente de 0...
    if (i % 2 != 0) {
        total++;
        soma += i;
    }
}
// Exibir resultados
console.log("Total de números ímpares: " + total);
console.log("Soma: " + soma);
console.log("Mariana de Castro Cardoso - 1TDS2");

