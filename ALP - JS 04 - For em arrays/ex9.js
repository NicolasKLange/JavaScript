/* Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um
número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice)
desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1" */

const numeros2 = [10, 20, 30, 40, 50];
const numeroProcurado = 30;

const indice = numeros2.indexOf(numeroProcurado);

if (indice !== -1) {
  console.log(`O número ${numeroProcurado} está no índice ${indice}`);
} else {
  console.log(-1);
}