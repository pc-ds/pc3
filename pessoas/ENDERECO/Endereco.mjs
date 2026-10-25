export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #cidade;
    #uf;
    #regiao;
    #estado;
    #ddd;

    async setCep(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado na base do ViaCEP.");
        }

        this.#cep = dados.cep;
        this.#logradouro = dados.logradouro;
        this.#bairro = dados.bairro;
        this.#cidade = dados.localidade;
        this.#uf = dados.uf;
        this.#estado = dados.estado;
        this.#regiao = dados.regiao;
        this.#ddd = dados.ddd;
    }

    mostrarEnderecoCompleto(){
        const linhas = [];

        if (this.#cep !== "") linhas.push(`CEP: ${this.#cep}`);
        if (this.#logradouro !== "") linhas.push(`Logradouro: ${this.#logradouro}`);
        if (this.#bairro !== "") linhas.push(`Bairro: ${this.#bairro}`);
        if (this.#cidade !== "") linhas.push(`Cidade: ${this.#cidade}`);
        if (this.#uf !== "") linhas.push(`UF: ${this.#uf}`);
        if (this.#estado !== "") linhas.push(`Estado: ${this.#estado}`);
        if (this.#regiao !== "") linhas.push(`Regiao: ${this.#regiao}`);
        if (this.#ddd !== "") linhas.push(`DDD: ${this.#ddd}`);

        return linhas.join('\n');
    }

    getCep() {
        return this.#cep;
    }

    getLogradouro() {
        return this.#logradouro;
    }

    getBairro() {
        return this.#bairro;
    }

    getCidade() {
        return this.#cidade;
    }

    getUf() {
        return this.#uf;
    }

    getddd(){
        return this.#ddd;
    }

    getEstado(){
        return this.#estado;
    }

    getRegiao(){
        return this.#regiao;
    }
}