import React, { useMemo, useState } from 'react';
import '../../styles/variables.css';
import '../../styles/shared.css';
import './TelaStartups.css';

// ============================================================================
// Tela de startups com busca e filtro
// ============================================================================
// COMPONENTES UTILIZADOS: Nenhum (componente standalone com filtro custom)
// ============================================================================
// Props: startups (array de objetos com { id, nome, setor })
// ============================================================================

export default function TelaStartups({ startups }) {
  const [termo, setTermo] = useState('');
  const [setor, setSetor] = useState('');

  const setores = useMemo(() => Array.from(new Set(startups.map((s) => s.setor))), [startups]);

  const filtradas = startups.filter(
    (s) => s.nome.toLowerCase().includes(termo.toLowerCase()) && (setor ? s.setor === setor : true)
  );

  return (
    <section className="container">
      <div className="card">
        <div className="form-container">
          <div className="search-group">
            <label className="label">Buscar por nome</label>
            <input
              type="text"
              placeholder="Ex: TechStart, InnovateLabs"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              className="input input-full"
            />
          </div>
          <div className="filter-group">
            <label className="label">Filtrar por setor</label>
            <select value={setor} onChange={(e) => setSetor(e.target.value)} className="select select-full">
              <option value="">Todos os setores</option>
              {setores.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <article className="card">
        {filtradas.length > 0 ? (
          <ul className="list">
            {filtradas.map((s) => (
              <li key={s.id} className="list-item">
                <strong>{s.nome}</strong> — {s.setor}
              </li>
            ))}
          </ul>
        ) : (
          <p className="message-empty">Nenhuma startup encontrada.</p>
        )}
      </article>
    </section>
  );
}
