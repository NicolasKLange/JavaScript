const produto = {
  id: 1,
  nome: "Lapis",
  preco: 2.99
};

// Convertendo o objeto para string JSON
const produtoJSON = JSON.stringify(produto);

// Imprimindo a string JSON no console
console.log("String JSON:");
console.log(produtoJSON);
