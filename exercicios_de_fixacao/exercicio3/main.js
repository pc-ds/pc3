const CarteiraDigital = require("./CarteiraDigital.js");

const conta = new CarteiraDigital();

conta.definirTitular("Jorge");

console.log(conta.consultarTitular());

conta.depositar(200);

console.log(conta.consultarSaldo());

conta.sacar(50);

conta.exibirDetalhes();
