//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

function somarArray(arr) {
  let soma = 0;
  for (const numero of arr) {
    soma += numero;
  }
  return soma;
}

console.log(somarArray([5, 10, 15]));