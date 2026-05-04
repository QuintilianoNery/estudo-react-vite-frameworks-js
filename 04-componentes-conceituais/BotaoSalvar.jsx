import React from 'react';

// Botão reutilizável para salvar
// Props:
// - onClick: função chamada ao clicar
// - disabled: boolean
export default function BotaoSalvar({ onClick, disabled = false }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      Salvar
    </button>
  );
}
