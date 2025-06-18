/* Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da
array, no seguinte formato: 'o menor número é X e o maior número é Y'. */

function menorMaior(arr) {
  const menor = Math.min(...arr);
  const maior = Math.max(...arr);
  return `O menor número é ${menor} e o maior número é ${maior}`;
}

console.log(menorMaior([8, 3, 15, 1, 20]));