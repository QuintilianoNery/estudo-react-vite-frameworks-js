import React, { useMemo, useState } from 'react';

// Tela de startups com busca e filtro — demonstra composição e chaves únicas
export default function TelaStartups({ startups }) {
  const [termo, setTermo] = useState('');
  const [setor, setSetor] = useState('');

  const setores = useMemo(() => Array.from(new Set(startups.map(s => s.setor))), [startups]);

  const filtradas = startups.filter(s =>
    s.nome.toLowerCase().includes(termo.toLowerCase()) && (setor ? s.setor === setor : true)
  );

  return (
    <section>
      <h2>Startups</h2>
      <input placeholder="Buscar por nome" value={termo} onChange={e => setTermo(e.target.value)} />
      <select value={setor} onChange={e => setSetor(e.target.value)}>
        <option value="">Todos os setores</option>
        {setores.map(s => <option key={s} value={s}>{s}</option>)}
      </select>

      <ul>
        {filtradas.map(s => (
          <li key={s.id}>{s.nome} — {s.setor}</li>
        ))}
      </ul>
    </section>
  );
}
