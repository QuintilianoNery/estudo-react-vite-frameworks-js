import React, { useState } from 'react';
import '../../styles/variables.css';
import '../../styles/shared.css';
import './Contador.css';

// Componente contador com estado local e estilo consistente
export default function Contador({ inicial = 0 }) {
  const [count, setCount] = useState(inicial);

  return (
    <div className="container">
      <p className="label">Contador</p>
      <div className="controls">
        <button
          type="button"
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          className="button-counter"
        >
          −
        </button>
        <span className="display">{count}</span>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="button-counter"
        >
          +
        </button>
      </div>
    </div>
  );
}
