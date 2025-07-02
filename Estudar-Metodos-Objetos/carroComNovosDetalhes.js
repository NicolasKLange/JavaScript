const carro = {
  marca: "Hyundai",
  modelo: "HB20",
  ano: 2021,
  cor: "Branco"
};

const carroNovo = {
  marca: "Chevrolet",
  modelo: "Onix",
  ano: 2023,
  cor: "Vermelho"
};

const carroComNovosDetalhes = {
  ...carro,
  ...carroNovo
};

console.log("Carro com novos detalhes:");
console.log(carroComNovosDetalhes);

carroComNovosDetalhes.cor = "Preto";
console.log("\nApós modificar a cor:");
console.log(carroComNovosDetalhes);
