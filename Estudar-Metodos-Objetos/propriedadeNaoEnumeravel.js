const carro = {
  marca: "Ford",
  modelo: "Fiesta",
  ano: 2018,
  cor: "Azul"
};

Object.defineProperty(carro, "placa", {
  value: "ABC-1234",
  enumerable: false
});

console.log("Propriedades enumeráveis com for...in:");
for (let prop in carro) {
  console.log(prop + ":", carro[prop]);
}

console.log("\nPropriedades enumeráveis com Object.keys():");
console.log(Object.keys(carro));

console.log("\nAcessando diretamente a placa:");
console.log("Placa:", carro.placa);
