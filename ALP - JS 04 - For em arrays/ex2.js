// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

function mostrarArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Índice ${i}: ${arr[i]}`);
  }
}

mostrarArray(['Carro', 'Moto', 'Bicicleta']);