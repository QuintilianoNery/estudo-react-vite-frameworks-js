import React from 'react';
import '../../styles/variables.css';
import '../../styles/shared.css';
import './DashboardAluno.css';

// ============================================================================
// COMPONENTES IMPORTADOS (do item 04 - Componentes conceituais)
// ============================================================================
import Contador from '../04-componentes-conceituais/Contador.jsx';
import BotaoSalvar from '../04-componentes-conceituais/BotaoSalvar.jsx';

// Dashboard acadêmico — exemplo de composição de componentes
// Props: aluno (objeto com { nome, matricula, cursosCursando })
// ============================================================================
// COMPONENTES UTILIZADOS NESTE ARQUIVO:
// 1. <Contador> — contador com +/- (item 04)
// 2. <BotaoSalvar> — botão estilizado (item 04)
// ============================================================================
export default function DashboardAluno({ aluno }) {
  return (
    <section className="container">
      {/* Seção de dados pessoais */}
      <article className="card">
        <h2 className="title">Dados do Aluno</h2>
        <p style={{ fontSize: 14, fontWeight: 500, color: '#4a5a70', margin: '0 0 8px' }}>
          <strong>Nome:</strong> {aluno.nome}
        </p>
        <p style={{ fontSize: 14, fontWeight: 500, color: '#4a5a70', margin: '0 0 8px' }}>
          <strong>Matrícula:</strong> {aluno.matricula}
        </p>
      </article>

      {/* Seção de cursos em andamento */}
      <article className="card">
        <h2 className="title">Cursos em Andamento</h2>
        {aluno.cursosCursando && aluno.cursosCursando.length > 0 ? (
          <ul className="list">
            {aluno.cursosCursando.map((curso) => (
              <li key={curso.id} className="list-item">
                <strong>{curso.nome}</strong> — Nota: <span style={{ color: '#10233f', fontWeight: 600 }}>{curso.nota ?? 'N/A'}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="message-empty" style={{ marginBottom: 0 }}>Nenhum curso em andamento</p>
        )}
      </article>

      {/* Seção de exemplo de composição: Contador (componente reutilizável) */}
      <article className="card">
        <h2 className="title">Exemplo: Componente Contador (do item 04)</h2>
        <p style={{ fontSize: 14, fontWeight: 500, color: '#4a5a70', marginBottom: 12 }}>Contador com estado local — clique nos botões +/-</p>
        <div className="form-group">
          <Contador inicial={0} />
        </div>
      </article>

      {/* Seção de exemplo de composição: BotaoSalvar (componente reutilizável) */}
      <article className="card">
        <h2 className="title">Exemplo: Componente BotaoSalvar (do item 04)</h2>
        <p style={{ fontSize: 14, fontWeight: 500, color: '#4a5a70', marginBottom: 12 }}>Botão reutilizável com estilo consistente</p>
        <div className="button-group">
          <BotaoSalvar onClick={() => window.alert('Dashboard salvo!')} />
        </div>
      </article>
    </section>
  );
}
