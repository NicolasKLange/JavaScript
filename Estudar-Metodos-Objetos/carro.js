const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  cor: "Prata"
};

console.log("Propriedades iniciais:");
for (let prop in carro) {
  console.log(prop + ":", carro[prop]);
}

// Adicionando mais propriedades
carro.portas = 4;
carro.automatico = true;
carro.combustivel = "Gasolina";

console.log("\nPropriedades após adicionar mais características:");
for (let prop in carro) {
  console.log(prop + ":", carro[prop]);
}
