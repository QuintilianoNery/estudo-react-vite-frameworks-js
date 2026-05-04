// Exemplo simples de JavaScript básico
// Este script demonstra funções básicas, uso de const/let e manipulação de arrays

// Constante com produtos de exemplo
const produtos = [
  { id: 1, nome: 'Caneta', preco: 2.5 },
  { id: 2, nome: 'Caderno', preco: 12.0 },
];

// Função que calcula o total dos produtos
function calcularTotal(lista) {
  // Reduz o array somando o preço de cada produto
  return lista.reduce((acc, p) => acc + p.preco, 0);
}

// Exemplo de uso
console.log('Produtos:', produtos);
console.log('Total:', calcularTotal(produtos));

// Export para permitir importação em ambiente de módulos (se necessário)
export { produtos, calcularTotal };
