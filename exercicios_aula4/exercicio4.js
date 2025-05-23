/*
4 - Crie uma função que receba três números como parâmetros e determine qual é o maior
entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o
maior. Imprima o maior valor no console.
*/

function MaiorNumero(num1, num2, num3) {
  let maiorNum;

  if (num1 >= num2 && num1 >= num3) {
    maiorNum = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    maiorNum = num2;
  } else {
    maiorNum = num3;
  }

  console.log("O maior número é:", maiorNum);
}

MaiorNumero(2, 100, 10); 