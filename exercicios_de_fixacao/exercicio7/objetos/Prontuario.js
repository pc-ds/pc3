class Prontuario{
    #numero;
    #observacoes;
    #animal;

    constructor(numero, animal){
        const Animal = require("./Animal.js");
        this.#numero = numero;
        this.#observacoes = [];
        if(animal instanceof Animal) this.#animal = animal;
    }

    setNumero(numero){
        this.#numero = numero;
    }

    getNumero(){
        return this.#numero;
    }

    setObservacoes(observacoes){
        if(observacoes != null && observacoes.length >= 15){
            this.#observacoes.push(observacoes);
            return true;
        }
        else{
            return false;
        }
    }

    getObservacoes(){
        return this.#observacoes;
    }

    setAnimal(animal){
        const Animal = require("./Animal.js");
        if(animal instanceof Animal){
            this.#animal = animal;
            return true;
        }
        else{
            return false;
        }
    }

    getAnimal(){
        return this.#animal;
    }
}

module.exports = Prontuario;