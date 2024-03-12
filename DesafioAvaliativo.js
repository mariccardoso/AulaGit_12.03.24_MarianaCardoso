
// Solicitar os dois números 
let y = 90;
let z = 50;

// Determinar o inicio e o fim: inicio sempre o menor número e o fim o maior
let start = y;
let end = z;

if (start < end) {
    start = y;
    end = z;

} else {
    start = z;
    end = y;
}

// Fazer a operação (total de números ímpares, soma e sequencia)
let impares = 0;
let soma = 0;
for (let i = start; i <= end; i++) {
    // Se o resto da divisão (%) por 2 for diferente de 0...
    if (i % 2 != 0) {
        impares++;
        soma += i;
    }
}
// Exibir resultados
console.log("Total de ímpares: " + impares);
console.log("Total soma: " + soma);

