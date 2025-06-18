/* Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma
função de callback que executa alguma operação matemática. Essa função deve iterar por cada
elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado
da operação no console. */

function executaOperacaoEmArray(arr, operacao) {
  arr.forEach((item) => {
    const resultado = operacao(item);
    console.log(resultado);
  });
}

// Multiplicar cada item por 2
executaOperacaoEmArray([1, 2, 3, 4], (numero) => numero * 2);