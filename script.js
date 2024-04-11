document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    
    adicionarContato(nome, telefone);
    limparFormulario();
});

function adicionarContato(nome, telefone) {
    let tabelaContatos = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];
    let novaLinha = tabelaContatos.insertRow();
    
    let colunaNome = novaLinha.insertCell(0);
    let colunaTelefone = novaLinha.insertCell(1);

    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}