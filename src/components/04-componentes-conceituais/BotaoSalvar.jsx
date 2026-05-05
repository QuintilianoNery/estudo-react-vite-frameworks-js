import React from 'react';
import '../../styles/variables.css';
import '../../styles/shared.css';
import './BotaoSalvar.css';

// Botão reutilizável para salvar com estilo consistente
// Props:
// - onClick: função chamada ao clicar
// - disabled: boolean
export default function BotaoSalvar({ onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="button"
    >
      Salvar
    </button>
  );
}
