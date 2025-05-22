//Funcao de exibir estudantes
function exibirEstudantes(nome, media) {
  return `O aluno ${nome}, tem média ${media}`;
}
console.log(exibirEstudantes("Nicolas", 9));

//Funcao de somar
function somar(numA, numB) {
    return numA + numB;
}
console.log("O resultado da soma é " + (somar(10,5)));

//Funcao como variavel, estudante reprovou
const alunoReprovado = function(notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(alunoReprovado(6,5));
console.log(alunoReprovado(4,3));