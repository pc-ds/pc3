class CarteiraDigital{
    #titular;
    #saldo = 0.0;

    definirTitular(nome){
        this.#titular = nome;
    }

    consultarTitular(){
        return this.#titular;
    }

    depositar(valor){
        this.#saldo += valor;
    }

    sacar(valor){
        if(valor > this.#saldo){
            console.error;
        }
        else this.#saldo -= valor;
    }

    consultarSaldo(){
        return this.#saldo;
    }

    exibirDetalhes(){
        console.log(`Titular: ${this.consultarTitular()}`);
        console.log(`Saldo: ${this.consultarSaldo()}`);
    }
}

module.exports = CarteiraDigital;