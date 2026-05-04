import React from 'react';
import Contador from '../04-componentes-conceituais/Contador.jsx';

// Dashboard simples de aluno — componente funcional
export default function DashboardAluno({ aluno }) {
  // aluno: { nome, matricula, cursosCursando }
  return (
    <section>
      <h2>Dashboard do Aluno</h2>
      <p><strong>Nome:</strong> {aluno.nome}</p>
      <p><strong>Matrícula:</strong> {aluno.matricula}</p>
      <h3>Cursos em andamento</h3>
      <ul>
        {aluno.cursosCursando.map(c => (
          <li key={c.id}>{c.nome} - Nota: {c.nota ?? 'N/A'}</li>
        ))}
      </ul>

      <h3>Exemplo de estado local</h3>
      <Contador inicial={0} />
    </section>
  );
}
