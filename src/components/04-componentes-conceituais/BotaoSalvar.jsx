import React from 'react';

// Botão reutilizável para salvar com estilo consistente
// Props:
// - onClick: função chamada ao clicar
// - disabled: boolean
export default function BotaoSalvar({ onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '8px 16px',
        background: disabled ? '#ccc' : '#10233f',
        color: '#ffffff',
        border: 'none',
        borderRadius: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontWeight: 600,
        fontSize: 14,
      }}
    >
      Salvar
    </button>
  );
}
