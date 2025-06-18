/* Considere um array de números inteiros.

Utilize o método forEach() para multiplicar cada elemento do array por 3 e
exibir no console o resultado de cada multiplicação. Depois, utilize o método
findIndex() para encontrar o índice do número 18 no array original. */

const numeros = [2, 4, 6, 8, 10, 18];

// Multiplicando cada número por 3
numeros.forEach((numero) => {
  console.log(numero * 3);
});

// Achar o índice do número 
const indice = numeros.findIndex(numero => numero === 18);

if (indice !== -1) {
  console.log(`O número 18 está no índice ${indice}`);
} else {
  console.log('O número 18 não foi encontrado no array');
}