const Cliente = require("./objetos/Cliente.js");
const Animal = require("./objetos/Animal.js");
const Prontuario = require("./objetos/Prontuario.js");
const Veterinario = require("./objetos/Veterinario.js");

// 1. Criar um cliente
const cliente = new Cliente("Maria Silva");
cliente.setTelefone("61999998888");

// 2. Criar dois animais 
const animal1 = new Animal("Rex", "Cachorro", cliente);
const animal2 = new Animal("Mimi", "Gato", cliente);

cliente.addAnimal(animal1);
cliente.addAnimal(animal2);

// 3. Criar um prontuário para cada animal
const prontuario1 = new Prontuario(1, animal1);
const prontuario2 = new Prontuario(2, animal2);

prontuario1.setObservacoes("Animal saudável, em dia com as vacinas.");
prontuario2.setObservacoes("Necessita de acompanhamento nutricional.");

animal1.setProntuario(prontuario1);
animal2.setProntuario(prontuario2);

// 4. Criar dois veterinários
const vet1 = new Veterinario("Dr. João Souza", "SP-00012345-VET");
const vet2 = new Veterinario("Dra. Ana Costa", "RJ-00067890-VET");

// 5. Estabelecer relacionamentos:
// - um veterinário atende vários animais
// - um animal pode ter vários veterinários
vet1.addAnimal(animal1);
vet1.addAnimal(animal2);
vet2.addAnimal(animal1);

// 6. Imprimir as informações
console.log("========== DADOS DO CLIENTE ==========");
console.log("Nome do cliente:", cliente.getNome());
console.log("Telefone:", cliente.getTelefone());

console.log("\n========== ANIMAIS CADASTRADOS ==========");
cliente.listarAnimais();

for (const animal of cliente.getAnimais()) {
    console.log(`\n--- Animal: ${animal.getNome()} ---`);
    console.log("Espécie:", animal.getEspecie());
    console.log("Dono:", animal.getCliente().getNome());

    console.log("Prontuário:");
    const prontuario = animal.getProntuario();
    console.log("  Número:", prontuario.getNumero());
    console.log("  Observações:", prontuario.getObservacoes());
    console.log("  Animal referenciado no prontuário:", prontuario.getAnimal().getNome());

    console.log("Veterinários responsáveis:");
    animal.listarVeterinarios();
}

console.log("\n========== VETERINÁRIOS E SEUS ANIMAIS ==========");
for (const vet of [vet1, vet2]) {
    console.log(`\n--- Veterinário: ${vet.getNome()} (CRMV: ${vet.getCRMV()}) ---`);
    console.log("Animais atendidos:");
    for (const animal of vet.getAnimais()) {
        console.log(" -", animal.getNome());
    }
}

console.log("\n========== REFERÊNCIAS CRUZADAS (checagem) ==========");
console.log(
    "Rex -> cliente é o mesmo objeto 'cliente'?",
    animal1.getCliente() === cliente
);
console.log(
    "Prontuário 1 -> animal é o mesmo objeto 'animal1'?",
    prontuario1.getAnimal() === animal1
);
console.log(
    "Vet1 atende Rex E Rex lista Vet1 entre seus veterinários?",
    vet1.getAnimais().includes(animal1) &&
    animal1.getVeterinario().includes(vet1)
);