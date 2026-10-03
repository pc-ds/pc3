class Pessoa{
    #nome;
    #email;
    #cpf;

    constructor(nome, email, cpf){
        this.setNome(nome);
        this.setEmail(email);
        this.setCpf(cpf);
    }

    setNome(nome){
        if(nome != null && nome.length >= 3){
            this.#nome = nome;
            return true;
        }
        return false;
    }

    getNome(){
        return this.#nome;
    }

    setEmail(email){
        const util = require("../biblioteca/util.js");
        if(util.validarEmail(email)){
            this.#email = email;
            return true;
        }
        return false;
    }

    getEmail(){
        return this.#email;
    }

    setCpf(cpf){
        const util = require("../biblioteca/util.js");
        if(util.validarCPF(cpf)){
            this.#cpf = cpf;
            return true;
        }
        return false;
    }

    getCpf(){
        return this.#cpf;
    }
}

module.exports = Pessoa;