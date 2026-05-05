import React, { useState } from 'react';

// Card conceitual para exibir informações de produto com contador integrado
// Recebe um objeto `produto` com { id, nome, preco }
export default function CardProduto({ produto, mostrarContador = false, contadorInicial = 0 }) {
  const [contador, setContador] = useState(contadorInicial);

  return (
    <article
      style={{
        border: '1px solid #d9e2ef',
        padding: '16px',
        borderRadius: '12px',
        background: '#ffffff',
        boxShadow: '0 2px 8px rgba(16, 35, 63, 0.08)',
        display: 'grid',
        gap: 12,
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 8px', fontSize: 18, color: '#10233f' }}>{produto.nome}</h3>
        <p style={{ margin: 0, color: '#4a5a70', fontSize: 14 }}>Preço: R$ {produto.preco.toFixed(2)}</p>
      </div>

      {mostrarContador && (
        <div
          style={{
            display: 'grid',
            gap: 8,
            borderTop: '1px solid #e8eef7',
            paddingTop: 12,
          }}
        >
          <p style={{ margin: 0, fontSize: 12, color: '#5b6b82', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Quantidade
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 8, alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => setContador((c) => Math.max(0, c - 1))}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: '1px solid #d9e2ef',
                background: '#f0f4f8',
                color: '#10233f',
                cursor: 'pointer',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              −
            </button>
            <span
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 700,
                color: '#10233f',
              }}
            >
              {contador}
            </span>
            <button
              type="button"
              onClick={() => setContador((c) => c + 1)}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: '1px solid #d9e2ef',
                background: '#f0f4f8',
                color: '#10233f',
                cursor: 'pointer',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              +
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
