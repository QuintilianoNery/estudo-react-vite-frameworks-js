import React, { useEffect, useState } from 'react';

// ============================================================================
// Tela de clientes componentizada
// ============================================================================
// COMPONENTES UTILIZADOS: Nenhum (componente standalone com lógica de
// carregamento, erro e estado vazio)
// ============================================================================
// Props: apiSimulada (função que retorna Promise com lista de clientes)
// ============================================================================

const cardStyle = {
  border: '1px solid #d9e2ef',
  padding: '16px',
  borderRadius: '12px',
  background: '#ffffff',
  boxShadow: '0 2px 8px rgba(16, 35, 63, 0.08)',
};

const listStyle = {
  margin: 0,
  paddingLeft: 16,
  display: 'grid',
  gap: 8,
};

const listItemStyle = {
  color: '#4a5a70',
  fontSize: 14,
};

export default function TelaClientes({ apiSimulada }) {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    apiSimulada()
      .then((data) => {
        if (!mounted) return;
        setClientes(data);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || 'Erro ao carregar');
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [apiSimulada]);

  if (loading)
    return (
      <article style={cardStyle}>
        <p style={{ margin: 0, color: '#5b6b82' }}>Carregando clientes...</p>
      </article>
    );

  if (error)
    return (
      <article style={cardStyle}>
        <p style={{ margin: 0, color: '#c62828' }}>Erro: {error}</p>
      </article>
    );

  if (clientes.length === 0)
    return (
      <article style={cardStyle}>
        <p style={{ margin: 0, color: '#999' }}>Nenhum cliente encontrado.</p>
      </article>
    );

  return (
    <article style={cardStyle}>
      <ul style={listStyle}>
        {clientes.map((c) => (
          <li key={c.id} style={listItemStyle}>
            <strong>{c.nome}</strong> — {c.email}
          </li>
        ))}
      </ul>
    </article>
  );
}
