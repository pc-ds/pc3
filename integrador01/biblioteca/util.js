function validarEmail(email){
    if(email != null && email.includes('@') && (email.endsWith(".com") || email.endsWith(".edu.br"))){
        return true;
    }
    return false;
}

function validarMatricula(matricula){
    if(matricula != null && matricula.length == 12){
        return true;
    }
    return false;
}

function validarCPF(cpf){
    if(cpf != null && cpf.length == 11){
        return true;
    }
    return false;
}

function mostraDados(objeto){
    if(objeto == null){
        console.log("Objeto inválido.");
        return;
    }
    const Pessoa = require("../pessoas/Pessoa.js");
    console.log(`Nome: ${objeto.getNome()}`);
    console.log(`CPF: ${objeto.getCpf()}`);
    console.log(`Email: ${objeto.getEmail()}`);
    const Aluno = require("../pessoas/Aluno.js");
    const Professor = require("../pessoas/Professor.js");
    if(objeto instanceof Aluno){
        console.log(`Matricula: ${objeto.getMatricula()}`);
    }
    if(objeto instanceof Professor){
        console.log(`Disciplina: ${objeto.getDisciplina()}`);
    }
    console.log("====================================================")
}

module.exports = {validarCPF, validarEmail, validarMatricula, mostraDados};