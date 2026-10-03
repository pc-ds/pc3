const Pessoa = require("./pessoas/Pessoa.js");
const Aluno = require("./pessoas/Aluno.js");
const Professor = require("./pessoas/Professor.js");
const util = require("./biblioteca/util.js");

const pessoa1 = ("Maria", "mariaSilva@hotmail.com", "15216127292");
const pessoa2 = ("Claudio", "claudioFerreiragmail.com", "10192783384");

const aluno1 = new Aluno("Pedro", "pedrinho@gmail.com", "98273621126", "251057600011");
const aluno2 = new Aluno("J", "joca@yahoo.edu.br", "87182733374","22103324465332");

const professor1 = new Professor("Lucas", "lucasOrlando@ifb.edu.br", "72684373394", "Calculo 2");
const professor2 = new Professor("Regis", "regisOgrande@gmail.com", "98273904900", "Programacao 3");

util.mostraDados(pessoa1);