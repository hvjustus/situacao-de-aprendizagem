const btnAdicionar = document.getElementById('btnAdicionar');
let contador = 1;

btnAdicionar.addEventListener('click', () => {
    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade');
    const cidade = document.getElementById('cidade');
    const tabela = document.getElementById('tabela');

    if (nome.value && idade.value && cidade.value) {
        tabela.innerHTML += `
                    <tr>
                        <td>${contador++}</td>
                        <td>${nome.value}</td>
                        <td>${idade.value}</td>
                        <td>${cidade.value}</td>
                    </tr>
                `;
        nome.value = idade.value = cidade.value = '';
    } else {
        alert('Preencha todos os campos.');
        return;
    }
});