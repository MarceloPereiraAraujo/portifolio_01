
let numeros = [2, 4, 5, 7, 10, 11, 12];
let soma = 0;
numeros.forEach(function(numero) {
    soma += numero;
});
let media = soma / numeros.length;
console.log(("esta é a média ")+(media));