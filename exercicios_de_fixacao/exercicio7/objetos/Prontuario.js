const Animal = require("./Animal.js");
const Cliente = require("./Cliente.js");
const Veterinario = require("./Veterinario.js");

class Prontuario{
    #numero;
    #observacoes;
    #animal;

    constructor(numero, animal){
        this.#numero = numero;
        observacoes = [];
        if(animal instanceof Animal) this.#animal = animal;
    }

    setNumero(numero){
        this.#numero = numero;
    }

    getNumero(){
        return this.#numero;
    }

    setObservacoes(observacoes){
        if(observacoes != null && observacoes >= 15){
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