import React from 'react';
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
  const cardStyle = {
    border: '1px solid #d9e2ef',
    padding: '16px',
    borderRadius: '12px',
    background: '#ffffff',
    boxShadow: '0 2px 8px rgba(16, 35, 63, 0.08)',
  };

  const titleStyle = {
    fontSize: 18,
    fontWeight: 600,
    color: '#10233f',
    margin: '0 0 12px',
  };

  const subtitleStyle = {
    fontSize: 14,
    fontWeight: 500,
    color: '#4a5a70',
    margin: '0 0 8px',
  };

  return (
    <section style={{ display: 'grid', gap: 16 }}>
      {/* Seção de dados pessoais */}
      <article style={cardStyle}>
        <h2 style={titleStyle}>Dados do Aluno</h2>
        <p style={subtitleStyle}>
          <strong>Nome:</strong> {aluno.nome}
        </p>
        <p style={subtitleStyle}>
          <strong>Matrícula:</strong> {aluno.matricula}
        </p>
      </article>

      {/* Seção de cursos em andamento */}
      <article style={cardStyle}>
        <h2 style={titleStyle}>Cursos em Andamento</h2>
        {aluno.cursosCursando && aluno.cursosCursando.length > 0 ? (
          <ul style={{ margin: 0, paddingLeft: 16, display: 'grid', gap: 8 }}>
            {aluno.cursosCursando.map((curso) => (
              <li key={curso.id} style={{ color: '#4a5a70', fontSize: 14 }}>
                <strong>{curso.nome}</strong> — Nota: <span style={{ color: '#10233f', fontWeight: 600 }}>{curso.nota ?? 'N/A'}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ ...subtitleStyle, color: '#999' }}>Nenhum curso em andamento</p>
        )}
      </article>

      {/* Seção de exemplo de composição: Contador (componente reutilizável) */}
      <article style={cardStyle}>
        <h2 style={titleStyle}>Exemplo: Componente Contador (do item 04)</h2>
        <p style={{ ...subtitleStyle, marginBottom: 12 }}>Contador com estado local — clique nos botões +/-</p>
        <div style={{ display: 'grid', gap: 12 }}>
          <Contador inicial={0} />
        </div>
      </article>

      {/* Seção de exemplo de composição: BotaoSalvar (componente reutilizável) */}
      <article style={cardStyle}>
        <h2 style={titleStyle}>Exemplo: Componente BotaoSalvar (do item 04)</h2>
        <p style={{ ...subtitleStyle, marginBottom: 12 }}>Botão reutilizável com estilo consistente</p>
        <div style={{ display: 'grid', gap: 8 }}>
          <BotaoSalvar onClick={() => window.alert('Dashboard salvo!')} />
        </div>
      </article>
    </section>
  );
}
