// Função para adicionar um gasto à tabela
function adicionar() {
  // Captura os valores dos inputs
  const descricao = document.getElementById('ipt').value;
  const valor = document.getElementById('ipt').value;
  const categoria = document.getElementById('categorias').value;

  // Verifica se os campos estão preenchidos
  if (!descricao || !valor || !categoria) {
    alert('Por favor, preencha todos os campos antes de adicionar um gasto.');
  } else {
    // Cria uma nova linha na tabela
  const tabela = document.getElementById('corpoLista');
  const novaLinha = document.createElement('tr');

  // Adiciona as células com os valores
  novaLinha.innerHTML = `
    <td>${descricao}</td>
    <td>${valor}</td>
    <td>${categoria}</td>
  `;

  // Adiciona a nova linha à tabela
  tabela.appendChild(novaLinha);

  // Limpa os campos do formulário
  document.getElementById('ipt').value = '';
  document.getElementById('ipt').nextElementSibling.value = '';
  document.getElementById('categorias').value = 'Casa';
  }
}