import React from 'react';

// Card conceitual para exibir informações de produto
// Recebe um objeto `produto` com { id, nome, preco }
export default function CardProduto({ produto }) {
  return (
    <article style={{ border: '1px solid #ddd', padding: '8px', borderRadius: '4px' }}>
      <h3>{produto.nome}</h3>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
    </article>
  );
}
