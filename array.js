const numeros = [0,1,2,3,4,5,6];

const metade = numeros.slice(0, numeros.length/2);
const outraMetade = numeros.slice(numeros.length/2);

console.log(metade);
console.log(outraMetade);

numeros.splice(3,3, "Numero");
console.log(numeros);

const numerosJuntos = metade.concat(outraMetade);
console.log(numerosJuntos);

const alunos = ['Nicolas', 'joao'];
const medias = [8, 10];

const lista = [alunos, medias];

console.log(lista);
console.log(`Aluno da posição 1 da lista é: ${lista[0][1]}. A nota é ${lista[1][1]}`)