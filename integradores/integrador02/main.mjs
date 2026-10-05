import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';
import PJ from "./pessoas/PJ.mjs";

const pj1 = new PJ("Claudio", "claudin@gmail.com", "10928323457653", "Amber");
const pj2 = new PJ("Ana",     "aninha@gmail.com",  "12983980482321", "Drogasil");

const data = new Date();

// criação do objeto pela classe IEclss
const ieC = new IEclss();

// atribuição de valores pela classe IEclss
ieC.setNumero('111');
ieC.setEstado('SP');
ieC.setDataRegistro(data);

// criação do objeto pela função IEfunc
const ieFnc = IEfunc();

// atribuição de valores pela função IEfunc
ieFnc.setNumero('928');
ieFnc.setEstado('MG');
ieFnc.setDataRegistro(data);

// definição do objeto IEjson
IEjson.setNumero('333');
IEjson.setEstado('RJ');
IEjson.setDataRegistro(data);

// relacionando o objeto ieC com um objeto do tipo PJ
ieC.setPJ(pj1);
var pjClass = ieC.getPJ();
console.log(`Objeto PJ associado a ieC: ${pjClass.getNome()}`);

//relacionando o objeto ieFunc com um objeto do tipo PJ
ieFnc.setPJ(pj2);
var pjFunc = ieFnc.getPJ();
console.log(`Objeto PJ associado a ieC: ${pjFunc.getNome()}`);

// relacionando um objeto IEjson com um objeto do tipo PJ
IEjson.setPJ(pj1);
var pjJson = IEjson.getPJ();
console.log(`Objeto PJ associado a IEjson: ${pjJson.getNome()}`);


// testando instanceof com objeto inválido
console.log("\n========== TESTE instanceof (Parte 8) ==========");

const objetoInvalido = {
    nome: 'Empresa Inválida'
};

console.log("Tentando associar objeto inválido em ieC:", ieC.setPJ(objetoInvalido));       
console.log("Tentando associar objeto inválido em ieFnc:", ieFnc.setPJ(objetoInvalido));     
console.log("Tentando associar objeto inválido em IEjson:", IEjson.setPJ(objetoInvalido));  

console.log("Associando objeto PJ válido em ieC:", ieC.setPJ(pj1));       
console.log("Associando objeto PJ válido em ieFnc:", ieFnc.setPJ(pj2));     
console.log("Associando objeto PJ válido em IEjson:", IEjson.setPJ(pj1));   


// função para exibir o relatório (parte 9)
function mostrarRelatorio(titulo, ie) {
    const pj = ie.getPJ();

    console.log(`\n========== ${titulo} ==========`);
    console.log("=== Pessoa Jurídica ===");
    console.log(`Nome: ${pj.getNome()}`);
    console.log(`E-mail: ${pj.getEmail()}`);
    console.log(`CNPJ: ${pj.getCnpj()}`);
    console.log(`Razão Social: ${pj.getRazaoSocial()}`);

    console.log("=== Inscrição Estadual ===");
    console.log(`Número: ${ie.getNumero()}`);
    console.log(`Estado: ${ie.getEstado()}`);
    console.log(`Data de Registro: ${ie.getDataRegistro().toLocaleString('pt-BR')}`);
    console.log(`Pessoa Jurídica: ${pj.getNome()} (${pj.getRazaoSocial()})`);
}

mostrarRelatorio("Relatório via IEclss", ieC);
mostrarRelatorio("Relatório via IEfunc()", ieFnc);
mostrarRelatorio("Relatório via IEjson", IEjson);

