// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const valores = [5, 10, 15, 20];
let soma = 0;

for (let i = 0; i < valores.length; i++) {
  soma += valores[i];
}

const media = soma / valores.length;
console.log(`A média é: ${media}`);