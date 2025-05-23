/*
2 - Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade
>= 18). Imprima o resultado no console.
*/

function maiorIdade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade!!");
    } else {
        console.log("Menor de idade");
    }
}

maiorIdade(18)