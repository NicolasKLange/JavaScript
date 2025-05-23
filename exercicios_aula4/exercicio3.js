/*
3 - Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é
lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne
true se for um palíndromo e false caso contrário. Imprima o resultado no console.
*/

function Palindromo(string) {
  const stringFormatada = string.replace(/\s+/g, '').toLowerCase();
  const stringReversa = stringFormatada.split('').reverse().join('');

  if (stringFormatada === stringReversa) {
    console.log(string + " é Palindromo!!");  
  } else {
    console.log(string + " não é Palindromo, pois de tras para frente fica: " + stringReversa); 
  }
  
  
}

Palindromo("arara");        