// Arquivo criado em projeto no www.stackblitz.com denominado usaAluno.js
// Para executar: node ./objetos/usaAluno.js

const Aluno = require('./escola/Aluno.js');

const joao = new Aluno();

// joao.#matricula = 1234; // ERRO

joao.escola = "IFB";
joao.setMatricula(12345);
joao.setCurso("Programação de FrontEnd");

console.log(joao.getMatricula());
console.log(joao.getCurso());
console.log(`Escola : ${joao.escola}`);