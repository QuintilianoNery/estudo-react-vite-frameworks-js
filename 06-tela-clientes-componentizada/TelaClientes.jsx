import React, { useEffect, useState } from 'react';

// Tela de clientes componentizada — demonstra carregando/erro/dados vazios
export default function TelaClientes({ apiSimulada }) {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    apiSimulada()
      .then(data => {
        if (!mounted) return;
        setClientes(data);
        setLoading(false);
      })
      .catch(err => {
        if (!mounted) return;
        setError(err.message || 'Erro ao carregar');
        setLoading(false);
      });
    return () => { mounted = false; };
  }, [apiSimulada]);

  if (loading) return <p>Carregando clientes...</p>;
  if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>;
  if (clientes.length === 0) return <p>Nenhum cliente encontrado.</p>;

  return (
    <ul>
      {clientes.map(c => (
        <li key={c.id}>{c.nome} — {c.email}</li>
      ))}
    </ul>
  );
}
