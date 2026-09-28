const Animal = require("./Animal.js");
const Cliente = require("./Cliente.js");
const Prontuario = require("./Prontuario.js");

class Veterinario{

    #nome;
    #crmv;
    #animais_atendidos;

    constructor(nome, cmrv){
        if(nome != null && nome.length > 3) this.#nome = nome;
        if(crmv != null && cmrv.length == 15) this.#crmv = crmv;
        this.#animais_atendidos = [];
    }

    setNome(nome){
        if(nome != null && nome.length > 3){
            this.#nome = nome;
            return true;
        }
        else{
            return false;
        }
    }

    getNome(){
        return this.#nome;
    }

    setCRMV(crmv){
        if(crmv != null && crmv.length == 15){
            this.#crmv = crmv;
            return true;
        }
        else return false;
    }

    addAnimal(animal){
        if(animal instanceof Animal){
            this.#animais_atendidos.push(animal);
            animal.addVeterinario(this);
            return true;
        }
        else{
            return false;
        }
    }

    getAnimais(){
        return this.#animais_atendidos;
    }

    [util.inspect.custom]() {
        return `Nome: ${this.#nome}\nCRMV: ${this.#crmv}\n`;
    }
}