const Cliente = require("./Cliente.js");
const Prontuario = require("./Prontuario.js");
const Veterinario = require("./Veterinario.js");

class Animal{
    #nome; 
    #especie;
    #cliente;
    #prontuario;
    #veterinarios;

    constructor(nome, especie, cliente){
        if(nome != null && nome.length >= 2) this.#nome = nome;
        if(especie != null && especie.length >= 4) this.#especie = especie;
        if(cliente instanceof Cliente) this.#cliente = cliente;
        this.#veterinarios = [];
    }

    setNome(nome){
        if(nome != NULL && nome.length >= 2){
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

    setEspecie(especie){
        if(especie != null && especie.length >= 4){
            this.#especie = especie;
            return true;
        }
        else{
            return false;
        }
    }

    getEspecie(){
        return this.#especie;
    }

    setCliente(cliente){
        if(cliente instanceof Ciente){
            this.#cliente = cliente;
            return true;
        }
        else{
            return false;
        }
    }

    getCliente(){
        return this.#cliente;
    }

    setProntuario(prontuario){
        if(prontuario instanceof Prontuario){
            this.#prontuario = prontuario;
            return true;
        }
        else{
            return false;
        }
    }

    addVeterinario(veterinario){
        if(veterinario instanceof Veterinario){
            this.#veterinarios.push(veterinario);
            veterinario.addAnimal(this);            
            return true;
        }
        else{
            return false;
        }
    }

    getVeterinario(){
        return this.#veterinarios;
    }

    listarVeterinarios(){
        for(vet in this.#veterinarios){
            console.log(vet.getNome());
        }
    }

    [util.inspect.custom]() {
        return `Nome: ${this.#nome}\nEspecie: ${this.#especie}\nDono: ${this.#cliente}\n`;
    }


}

module.exports = Animal;