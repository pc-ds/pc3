class Veterinario{

    #nome;
    #crmv;
    #animais_atendidos;

    constructor(nome, crmv){
        if(nome != null && nome.length > 3) this.#nome = nome;
        if(crmv != null && crmv.length == 15) this.#crmv = crmv;
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

    getCRMV(){
        return this.#crmv;
    }

    addAnimal(animal){
        const Animal = require("./Animal.js");
        if(animal instanceof Animal){
            if(!this.#animais_atendidos.includes(animal)){
                this.#animais_atendidos.push(animal);
                animal.addVeterinario(this);
            }
            return true;
        }
        else{
            return false;
        }
    }

    getAnimais(){
        return this.#animais_atendidos;
    }
}

module.exports = Veterinario;