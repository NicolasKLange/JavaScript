const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  cor: "Preto",
  ligado: false,

  ligar: function () {
    if (this.ligado) {
      console.log("O carro já está ligado.");
    } else {
      this.ligado = true;
      console.log("O carro foi ligado.");
    }
  },

  desligar: function () {
    if (!this.ligado) {
      console.log("O carro já está desligado.");
    } else {
      this.ligado = false;
      console.log("O carro foi desligado.");
    }
  },

  obterDetalhes: function () {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Ligado: ${this.ligado}`;
  }
};

carro.ligar();
carro.desligar();
console.log(carro.obterDetalhes());
