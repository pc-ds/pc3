import Pessoa from "./Pessoa.mjs"

export default class PJ extends Pessoa{

    #cnpj;
    #razaoSocial;

    constructor(nome, email, cnpj, razaoSocial){
        super(nome, email);
        this.setCnpj(cnpj);
        this.setRazaoSocial(razaoSocial);
    }

    setCnpj(cnpj){
        if(cnpj != null && cnpj.length == 14){
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getCnpj(){
        return this.#cnpj;
    }

    setRazaoSocial(razao){
        if(razao){
            this.#razaoSocial = razao;
            return true;
        }
        return false;
    }

    getRazaoSocial(){
        return this.#razaoSocial;
    }
}