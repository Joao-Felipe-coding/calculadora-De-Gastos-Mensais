// Função para adicionar um gasto à tabela
function adicionar() {
  // Captura os valores dos inputs
  const descricao = document.getElementById('ipt').value;
  const valor = document.getElementById('ipt').value;
  const categoria = document.getElementById('categorias').value;

  // Verifica se os campos estão preenchidos
  if (!descricao || !valor || !categoria) {
    alert('Por favor, preencha todos os campos antes de adicionar um gasto.');
    return;
  }
  
}