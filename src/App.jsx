import React from 'react';
import Contador from '../04-componentes-conceituais/Contador.jsx';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Semana 10 - Componentes de Exemplo</h1>
      <p>Este é um pequeno app de demonstração. Os componentes estão na pasta raiz do projeto conforme solicitado.</p>
      <Contador inicial={5} />
    </div>
  );
}
