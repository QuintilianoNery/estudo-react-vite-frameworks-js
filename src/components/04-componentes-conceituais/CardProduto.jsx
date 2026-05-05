import React, { useState } from 'react';
import '../../styles/variables.css';
import '../../styles/shared.css';
import './CardProduto.css';

// Card conceitual para exibir informações de produto com contador integrado
// Recebe um objeto `produto` com { id, nome, preco }
export default function CardProduto({ produto, mostrarContador = false, contadorInicial = 0 }) {
  const [contador, setContador] = useState(contadorInicial);

  return (
    <article className="card">
      <div className="header">
        <h3 className="produto-nome">{produto.nome}</h3>
        <p className="produto-preco">Preço: R$ {produto.preco.toFixed(2)}</p>
      </div>

      {mostrarContador && (
        <div style={{ display: 'grid', gap: 8, borderTop: '1px solid #e8eef7', paddingTop: 12 }}>
          <p style={{ margin: 0, fontSize: 12, color: '#5b6b82', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Quantidade
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 8, alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => setContador((c) => Math.max(0, c - 1))}
              className="button-counter"
            >
              −
            </button>
            <span className="quantity-display">{contador}</span>
            <button
              type="button"
              onClick={() => setContador((c) => c + 1)}
              className="button-counter"
            >
              +
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
