class Animal{
    #nome; 
    #especie;
    #cliente;
    #prontuario;
    #veterinarios;

    constructor(nome, especie, cliente){
        const Cliente = require("./Cliente.js");
        if(nome != null && nome.length >= 2) this.#nome = nome;
        if(especie != null && especie.length >= 4) this.#especie = especie;
        if(cliente instanceof Cliente) this.#cliente = cliente;
        this.#veterinarios = [];
    }

    setNome(nome){
        if(nome != null && nome.length >= 2){
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
        const Cliente = require("./Cliente.js");
        if(cliente instanceof Cliente){
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
        const Prontuario = require("./Prontuario.js");
        if(prontuario instanceof Prontuario){
            this.#prontuario = prontuario;
            return true;
        }
        else{
            return false;
        }
    }

    getProntuario(){
        return this.#prontuario;
    }
    addVeterinario(veterinario){
        const Veterinario = require("./Veterinario.js");
        if(veterinario instanceof Veterinario){
            if(!this.#veterinarios.includes(veterinario)){
                this.#veterinarios.push(veterinario);
                veterinario.addAnimal(this);
            }
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
    console.log(`Animal: ${this.#nome}\n`)
    console.log("Veterinarios:\n")
        for(const vet of this.#veterinarios){
            console.log(`\u2022 Nome: ${vet.getNome()}  CRMV: ${vet.getCRMV()}`);
        }
    }
}

module.exports = Animal;