import React, { useState } from 'react';

// Componente contador com estado local e estilo consistente
export default function Contador({ inicial = 0 }) {
  const [count, setCount] = useState(inicial);

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <p style={{ margin: 0, fontSize: 12, color: '#5b6b82', textTransform: 'uppercase', letterSpacing: 0.5 }}>
        Contador
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 8, alignItems: 'center' }}>
        <button
          type="button"
          onClick={() => setCount((c) => Math.max(0, c - 1))}
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
          {count}
        </span>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
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
  );
}
