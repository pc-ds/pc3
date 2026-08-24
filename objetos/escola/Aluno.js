// Arquivo criado em projeto no www.stackblitz.com denominado Aluno.js
// Arquivo criado dentro de uma pasta /objetos/escola na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de visibilidade e encapsulamento

class Aluno {

    #matricula; // atributo privado
    #curso;     // atributo privado
    escola;     // atributo público

    setMatricula(matricula) {
        this.#matricula = matricula;
    }

    getMatricula() {
        return this.#matricula;
    }

    setCurso(curso) {
        this.#curso = curso;
    }   

    getCurso() {
        return this.#curso;
    }

}

module.exports = Aluno;