const pessoaOriginal = {
  id: 1,
  nome: "Maria",
  idade: 30
};

function copiarObjeto(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Usar a função para criar uma cópia do objeto original
const pessoaCopia = copiarObjeto(pessoaOriginal);

// Modificar a cópia
pessoaCopia.nome = "João";
pessoaCopia.profissao = "Engenheiro";

console.log("Objeto Original:", pessoaOriginal);
console.log("Objeto Modificado (Cópia):", pessoaCopia);
