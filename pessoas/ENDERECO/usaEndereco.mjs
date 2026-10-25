import Endereco from './Endereco.mjs';

async function usaEndereco() {
    const end = new Endereco();

    try {
        await end.setCep("39205000");

        console.log("✅ Endereço carregado com sucesso:");
        let endereco = end.mostrarEnderecoCompleto();

        console.log(endereco);

    } catch (erro) {
        console.error("❌ Erro ao definir CEP:", erro.message);
    }
}

usaEndereco();