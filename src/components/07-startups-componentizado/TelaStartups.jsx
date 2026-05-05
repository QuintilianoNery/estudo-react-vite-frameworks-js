import React, { useMemo, useState } from 'react';

// ============================================================================
// Tela de startups com busca e filtro
// ============================================================================
// COMPONENTES UTILIZADOS: Nenhum (componente standalone com filtro custom)
// ============================================================================
// Props: startups (array de objetos com { id, nome, setor })
// ============================================================================

const inputStyle = {
  padding: '8px 12px',
  fontSize: 14,
  border: '1px solid #d9e2ef',
  borderRadius: 8,
  background: '#ffffff',
  color: '#10233f',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const selectStyle = {
  padding: '8px 12px',
  fontSize: 14,
  border: '1px solid #d9e2ef',
  borderRadius: 8,
  background: '#ffffff',
  color: '#10233f',
  fontFamily: 'inherit',
  outline: 'none',
  cursor: 'pointer',
};

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

export default function TelaStartups({ startups }) {
  const [termo, setTermo] = useState('');
  const [setor, setSetor] = useState('');

  const setores = useMemo(() => Array.from(new Set(startups.map((s) => s.setor))), [startups]);

  const filtradas = startups.filter(
    (s) => s.nome.toLowerCase().includes(termo.toLowerCase()) && (setor ? s.setor === setor : true)
  );

  return (
    <section style={{ display: 'grid', gap: 16 }}>
      <div style={cardStyle}>
        <div style={{ display: 'grid', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, color: '#5b6b82', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>
              Buscar por nome
            </label>
            <input
              type="text"
              placeholder="Ex: TechStart, InnovateLabs"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              style={{ ...inputStyle, width: '100%' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, color: '#5b6b82', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 }}>
              Filtrar por setor
            </label>
            <select value={setor} onChange={(e) => setSetor(e.target.value)} style={{ ...selectStyle, width: '100%' }}>
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

      <article style={cardStyle}>
        {filtradas.length > 0 ? (
          <ul style={listStyle}>
            {filtradas.map((s) => (
              <li key={s.id} style={listItemStyle}>
                <strong>{s.nome}</strong> — {s.setor}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ margin: 0, color: '#999' }}>Nenhuma startup encontrada.</p>
        )}
      </article>
    </section>
  );
}
