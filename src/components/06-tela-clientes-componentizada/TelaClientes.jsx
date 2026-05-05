import React, { useEffect, useState } from 'react';
import '../../styles/variables.css';
import '../../styles/shared.css';
import './TelaClientes.css';

// ============================================================================
// Tela de clientes componentizada
// ============================================================================
// COMPONENTES UTILIZADOS: Nenhum (componente standalone com lógica de
// carregamento, erro e estado vazio)
// ============================================================================
// Props: apiSimulada (função que retorna Promise com lista de clientes)
// ============================================================================

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
      <article className="card">
        <p className="message-loading">Carregando clientes...</p>
      </article>
    );

  if (error)
    return (
      <article className="card">
        <p className="message-error">Erro: {error}</p>
      </article>
    );

  if (clientes.length === 0)
    return (
      <article className="card">
        <p className="message-empty">Nenhum cliente encontrado.</p>
      </article>
    );

  return (
    <article className="card">
      <ul className="list">
        {clientes.map((c) => (
          <li key={c.id} className="list-item">
            <strong>{c.nome}</strong> — {c.email}
          </li>
        ))}
      </ul>
    </article>
  );
}
