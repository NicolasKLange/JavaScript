/*1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um
livro. O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.

autor (string): nome do autor do livro.

anoPublicacao (number): ano de publicação do livro.

genero (string): gênero do livro.

No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes
do livro no console.*/ 
const livro1 = {
  titulo: "Pai Rico, Pai Pobre",
  autor: "Robert Kiyosaki",
  anoPublicacao: 1997,
  genero: "Finanças Pessoais"
};
console.log("1 - Detalhes do livro:");
console.log(livro1);
/*2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um
objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi
publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de
publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são
exibidas corretamente.*/
const anoAtual = new Date().getFullYear();

const livro2 = {
  titulo: "Do Mil ao Milhão",
  autor: "Thiago Nigro",
  anoPublicacao: 2018,
  genero: "Finanças Pessoais"
};

livro2.idadePublicacao = anoAtual - livro2.anoPublicacao;

const mostrarDetalhes = `Título: ${livro2.titulo}, Autor: ${livro2.autor}, Ano: ${livro2.anoPublicacao}, Gênero: ${livro2.genero}, Idade da publicação: ${livro2.idadePublicacao} anos.`;
console.log("\n2 - Detalhes com idade de publicação:");
console.log(mostrarDetalhes);

/*3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no
console os detalhes do livro.*/
const livro3 = {
  titulo: "Psicologia Financeira",
  autor: "Morgan Housel",
  anoPublicacao: 2020,
  genero: "Finanças Pessoais",
  idadePublicacao: anoAtual - 2020
};

console.log("\n3 - Acessando propriedades com colchetes:");
console.log("Título:", livro3["titulo"]);
console.log("Autor:", livro3["autor"]);
console.log("Ano de publicação:", livro3["anoPublicacao"]);
console.log("Gênero:", livro3["genero"]);
console.log("Idade de publicação:", livro3["idadePublicacao"]);

/*4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada
como null.

No final do arquivo livro.js, adicione uma avaliação ao objeto.

Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.*/
const livro4 = {
  titulo: "Pai Rico, Pai Pobre",
  autor: "Robert Kiyosaki",
  anoPublicacao: 1997,
  genero: "Finanças Pessoais",
  idadePublicacao: anoAtual - 1997,
  avaliacao: null
};

console.log("\n4 - Avaliação do livro:");
if (livro4.avaliacao === null) {
  livro4.avaliacao = 4.8;
  console.log("Avaliação adicionada:", livro4.avaliacao);
} else {
  console.log("O livro já possui uma avaliação.");
}

/*5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois altere o gênero do livro para "Aventura".*/
const livro5 = {
  titulo: "Do Mil ao Milhão",
  autor: "Thiago Nigro",
  anoPublicacao: 2018,
  genero: "Finanças Pessoais",
  idadePublicacao: anoAtual - 2018
};

livro5.genero = "Aventura"; 
console.log("\n5 - Gênero alterado:");
console.log(livro5);

/*6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no
console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.*/
const livro6 = {
  titulo: "Psicologia Financeira",
  autor: "Morgan Housel",
  anoPublicacao: 2020,
  genero: "Finanças Pessoais",
  idadePublicacao: anoAtual - 2020,
  avaliacao: 4.9
};

delete livro6.avaliacao;

console.log("\n6 - Detalhes após excluir avaliação:");
console.log(livro6);
