/*
5 - Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o
expoente. A função deve calcular a potência da base elevada ao expoente e retornar o
resultado.
*/

const calculaPotencia = (base, expoente) => {
  let resultado = 1;

  for (let i = 0; i < Math.abs(expoente); i++) {
    resultado *= base;
  }

  // Se o expoente for negativo, retorna o inverso
  return expoente >= 0 ? resultado : 1 / resultado;
};

// Testando a função
console.log("A potência é " + calculaPotencia(2, 3));   // 8

