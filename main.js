let totalGastos = 0;

// Função para adicionar um gasto à tabela
function adicionar() {
  // Captura os valores dos inputs
  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const categoria = document.getElementById('categorias').value;

  // Verifica se os campos estão preenchidos
  if (!descricao || isNaN(valor) || !categoria) {
    alert('Por favor, preencha todos os campos antes de adicionar um gasto.');
  } else {
    // Cria uma nova linha na tabela
    const tabela = document.getElementById('corpoLista');
    const novaLinha = document.createElement('tr');

    // Adiciona as células com os valores
    novaLinha.innerHTML = `
      <td>${descricao}</td>
      <td>${valor.toFixed(2)}</td>
      <td>${categoria}</td>
      <td><button class='btn btn-danger btn-sm' onclick='remover(this)'>Excluir</button></td>
    `;

    // Adiciona a nova linha à tabela
    tabela.appendChild(novaLinha);

    // Atualiza o total de gastos
    totalGastos += valor;
    document.getElementById('totalGastos').innerText = `Total de Gastos: R$ ${totalGastos.toFixed(2)}`;

    // Limpa os campos do formulário
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('categorias').value = 'Casa';
  }
}

function remover(botao) {
  const linha = botao.parentNode.parentNode;
  const valor = parseFloat(linha.cells[1].innerText);
  totalGastos -= valor;
  document.getElementById('totalGastos').innerText = `Total de Gastos: R$ ${totalGastos.toFixed(2)}`;
  linha.remove();
}