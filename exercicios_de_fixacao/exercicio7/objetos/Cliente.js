class Cliente{
    
    #nome;
    #telefone;
    #animais;


    constructor(nome){
        if(nome != null && nome.length >= 3) this.#nome = nome;
        this.#telefone = [];        
        this.#animais = [];
    }

    setNome(nome){
        if(nome !== null && nome !== undefined && nome.trim() !== ""){
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

    setTelefone(telefone){
        if(telefone != null && telefone.length == 11){
            this.#telefone = telefone;
            return true;
        }
        else{
            return false;
        }
    }
    
    getTelefone(){
        return this.#telefone;
    }
    
    addAnimal(bicho){
        const Animal = require("./Animal.js");
        if(bicho instanceof Animal){
            this.#animais.push(bicho);
            bicho.setCliente(this);
            return true;
        }
        else{
            return false;
        }
    }
    
    getAnimais(){
        return this.#animais;
    }
    
    listarAnimais(){
        console.log(`Cliente: ${this.#nome}:\n`);
        console.log("Animais: \n");
        for(const animal of this.#animais){
            console.log(`\u2022 ${animal.getNome()}`);
        }
    }
}

module.exports = Cliente;