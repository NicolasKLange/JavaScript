const fs = require('fs');
const path = require('path');

const arquivo = path.join(__dirname, 'animais.json');

// a) Ler o conteúdo do arquivo animais.json
fs.readFile(arquivo, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  // b) Converter o conteúdo para objeto JavaScript
  let animais;
  try {
    animais = JSON.parse(data);
  } catch (parseErr) {
    console.error('Erro ao converter JSON:', parseErr);
    return;
  }

  // c) Adicionar um novo animal com id único
  const novoAnimal = {
    id: animais.length > 0 ? Math.max(...animais.map(a => a.id)) + 1 : 1,
    nome: "Elefante",
    tipo: "Mamífero",
    habitat: "Florestas e Savanas"
  };
  animais.push(novoAnimal);

  // d) Modificar o habitat de um animal existente (exemplo: modificar habitat do animal com id 2)
  const animalParaModificar = animais.find(a => a.id === 2);
  if (animalParaModificar) {
    animalParaModificar.habitat = "Antártida e Regiões Frias";
  }

  // e) Remover um animal do array (exemplo: remover o animal com id 1)
  const idParaRemover = 1;
  animais = animais.filter(a => a.id !== idParaRemover);

  // f) Converter o objeto modificado para string JSON
  const jsonModificado = JSON.stringify(animais, null, 2);

  // g) Imprimir no console o objeto JavaScript resultante
  console.log('Array atualizado de animais:');
  console.table(animais);

  // Salvar o arquivo atualizado
  fs.writeFile(arquivo, jsonModificado, 'utf8', err => {
    if (err) {
      console.error('Erro ao salvar o arquivo:', err);
    } else {
      console.log('Arquivo atualizado com sucesso!');
    }
  });
});
