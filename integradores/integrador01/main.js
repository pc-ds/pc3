const Pessoa = require("./pessoas/Pessoa.js");
const Aluno = require("./pessoas/Aluno.js");
const Professor = require("./pessoas/Professor.js");
const util = require("./biblioteca/util.js");

// Tudo certo com a maria
const pessoa1 = new Pessoa("Maria", "mariaSilva@hotmail.com", "15216127292");
// Email invalido pro claudio - sem @
const pessoa2 = new Pessoa("Claudio", "claudioFerreiragmail.com", "10192783384");

// Email invalido pro Pedro - Termina com .om
const aluno1 = new Aluno("Pedro", "pedrinho@gmail.om", "98273621126", "251057600011");
// Nome invalido pro J - menos de 3 letras
const aluno2 = new Aluno("J", "joca@yahoo.edu.br", "87182733374","22103324465332");

// Cpf invalido pro Lucas - 10 digitos
const professor1 = new Professor("Lucas", "lucasOrlando@ifb.edu.br", "7268433394", "Calculo 2");
// Email invalido pro Regis - Termina com .com e nao edu.br
const professor2 = new Professor("Regis", "regisOgrande@gmail.com", "98273904900", "Programacao 3");

console.log("Pessoa 1: ");
util.mostraDados(pessoa1);
console.log("Pessoa 2: ");
util.mostraDados(pessoa2);
console.log("Aluno 1: ");
util.mostraDados(aluno1);
console.log("Aluno 2: ");
util.mostraDados(aluno2);
console.log("Professor 1: ");
util.mostraDados(professor1);
console.log("Professor 2: ");
util.mostraDados(professor2);