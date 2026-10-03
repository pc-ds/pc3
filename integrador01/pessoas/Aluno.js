const Pessoa = require("./Pessoa.js");

class Aluno extends Pessoa{

    #matricula;

    constructor(nome, email, cpf, matricula){
        super(nome, email, cpf);
        this.setMatricula(matricula);
    }

    setMatricula(matricula){
        const util = require("../biblioteca/util.js");
        if(util.validarMatricula(matricula)){
            this.#matricula = matricula;
            return true;
        }
        return false;
    }

    getMatricula(){
        return this.#matricula;
    }
}

module.exports = Aluno;