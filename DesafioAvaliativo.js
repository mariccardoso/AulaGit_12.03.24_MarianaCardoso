
// Solicitar os dois números 
let y = 90;
let z = 50;

// Determinar o inicio e o fim: inicio sempre o menor número e o fim o maior
let inicio = y;
let fim = z;

if (inicio < fim) {
    inicio = y;
    fim = z;

} else {
    inicio = z;
    fim = y;
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
console.log("Total deímpares: " + total);
console.log("Total soma: " + soma);

