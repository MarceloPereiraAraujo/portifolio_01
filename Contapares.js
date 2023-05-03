let numeros = [2, 4, 5, 7, 10, 11, 12];
let soma = 0;

for (let pares = 0; pares < numeros.length; pares++) {
    if (numeros[pares] % 2 === 0) {
        soma += numeros[pares];
    }
}

console.log(("A soma dos números pares deu  ")+(soma));