// Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
// Arquivo criado dentro da pasta "objetos" do projeto// não deve executar o arquivo diretamente com node

class Pessoa {

   constructor(peso, altura) {
     this.peso = peso;
     this.altura = altura;
   }

   imc() { // índice de massa corpórea
     let imc = this.peso / (this.altura * this.altura);
     return imc;
   }

 }

module.exports = Pessoa;