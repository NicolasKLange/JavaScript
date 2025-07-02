const pessoa = {
  nome: "João",
  notas: [8, 7, 9],
  
  calcularMediaNotas: function () {
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    return soma / this.notas.length;
  },

  classificarDesempenho: function () {
    const media = this.calcularMediaNotas();
    if (media >= 9) {
      return "Desempenho excelente";
    } else if (media >= 7.6) {
      return "Bom desempenho";
    } else if (media >= 6) {
      return "Desempenho regular";
    } else {
      return "Desempenho insuficiente";
    }
  }
};

const media = pessoa.calcularMediaNotas();
console.log("Média das notas:", media.toFixed(2));
console.log("Categoria de desempenho:", pessoa.classificarDesempenho());
