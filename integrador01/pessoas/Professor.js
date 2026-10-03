const Pessoa = require("./Pessoa.js");

class Professor extends Pessoa{

    #disciplina;

    constructor(nome, email, cpf, disciplina){
        super(nome, email, cpf);
        this.setDisciplina(disciplina);
    }

    setEmail(email){
        if(email != null && email.endsWith(".edu.br")){
            return super.setEmail(email);
        }
        return false;
    }

    setDisciplina(disciplina){
        if(disciplina != null && disciplina.length >= 5){
            this.#disciplina = disciplina;
            return true;
        }
        return false;
    }
}

module.exports = Professor;