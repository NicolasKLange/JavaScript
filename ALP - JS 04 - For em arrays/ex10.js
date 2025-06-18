/* Você recebeu dois arrays de nomes contendo os alunos da Turma A e da
Turma B.

Utilize o método concat() para unir os arrays das turmas A e B em um único
array chamado todasAsTurmas. Depois, utilize o método find() para buscar
um aluno específico pelo nome no array todosAlunos. Exiba no console uma
mensagem informando o nome do aluno procurado; caso não exista na lista,
retorne uma mensagem de aviso, por exemplo Aluno não encontrado */

const turmaA = ['Ana', 'Bruno', 'Carlos'];
const turmaB = ['Diana', 'Eduardo', 'Fernanda'];

// Unir as turmas
const todasAsTurmas = turmaA.concat(turmaB);

// Nome para procurar
const alunoProcurado = 'Carlos';

// Buscar o aluno
const alunoEncontrado = todasAsTurmas.find(nome => nome === alunoProcurado);

if (alunoEncontrado) {
  console.log(`Aluno encontrado: ${alunoEncontrado}`);
} else {
  console.log('Aluno não encontrado.');
}