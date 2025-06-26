const produtos = require('./dados.json');

console.log("Todos os produtos:");
console.table(produtos);

console.log("\nNome do primeiro produto:", produtos[0].nome);
console.log("Preço do segundo produto:", produtos[1].preco);
console.log("Estoque do terceiro produto:", produtos[2].estoque);
