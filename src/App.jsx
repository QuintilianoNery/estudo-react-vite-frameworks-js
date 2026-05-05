import React, { useState, useMemo } from 'react';
import BotaoSalvar from '../04-componentes-conceituais/BotaoSalvar.jsx';
import CardProduto from '../04-componentes-conceituais/CardProduto.jsx';
import Contador from '../04-componentes-conceituais/Contador.jsx';
import DashboardAluno from '../05-dashboard-academico/DashboardAluno.jsx';
import TelaClientes from '../06-tela-clientes-componentizada/TelaClientes.jsx';
import TelaStartups from '../07-startups-componentizado/TelaStartups.jsx';

const atividades = [
  {
    numero: '01',
    titulo: 'JavaScript básico',
    arquivo: '/01-javascript-basico/script.js',
    tipo: 'script JS',
    descricao: 'Exemplo com arrays, função e console para reforçar a base da linguagem.',
  },
  {
    numero: '02',
    titulo: 'Cadastro de produtos com JS puro',
    arquivo: '/02-cadastro-produtos-js-puro/index.html',
    tipo: 'HTML + JS puro',
    descricao: 'Formulário com validação simples e atualização manual do DOM.',
  },
  {
    numero: '03',
    titulo: 'Busca de clientes com jQuery',
    arquivo: '/03-busca-clientes-jquery/index.html',
    tipo: 'HTML + jQuery',
    descricao: 'Filtro de clientes simulando um cenário legado com manipulação facilitada.',
  },
  {
    numero: '04',
    titulo: 'Componentes conceituais',
    arquivo: '/04-componentes-conceituais/',
    tipo: 'JSX',
    descricao: 'Botão, card de produto e contador com estado local.',
  },
  {
    numero: '05',
    titulo: 'Dashboard acadêmico',
    arquivo: '/05-dashboard-academico/DashboardAluno.jsx',
    tipo: 'JSX',
    descricao: 'Componente composto com lista de cursos e contador reutilizável.',
  },
  {
    numero: '06',
    titulo: 'Tela de clientes componentizada',
    arquivo: '/06-tela-clientes-componentizada/TelaClientes.jsx',
    tipo: 'JSX',
    descricao: 'Exemplo com carregamento, erro e estado vazio.',
  },
  {
    numero: '07',
    titulo: 'Tela de startups com busca e filtro',
    arquivo: '/07-startups-componentizado/TelaStartups.jsx',
    tipo: 'JSX',
    descricao: 'Lista filtrável com busca por nome e seleção por setor.',
  },
];

const alunosExemplo = {
  nome: 'Mariana Lima',
  matricula: '2026.10.1842',
  cursosCursando: [
    { id: 1, nome: 'Front End II', nota: 9.4 },
    { id: 2, nome: 'Banco de Dados', nota: 8.7 },
    { id: 3, nome: 'Frameworks JavaScript', nota: 9.1 },
  ],
};

const startupsExemplo = [
  { id: 1, nome: 'Nexa Labs', setor: 'EdTech' },
  { id: 2, nome: 'AgroFlow', setor: 'Agro' },
  { id: 3, nome: 'HealthLink', setor: 'HealthTech' },
  { id: 4, nome: 'ByteCraft', setor: 'SaaS' },
];

const clientesSimulados = [
  { id: 1, nome: 'Ana Silva', email: 'ana@exemplo.com' },
  { id: 2, nome: 'Bruno Souza', email: 'bruno@exemplo.com' },
  { id: 3, nome: 'Carla Mendes', email: 'carla@exemplo.com' },
];

function apiClientesSimulada() {
  return Promise.resolve(clientesSimulados);
}

function AppHeader() {
  return (
    <header
      style={{
        background: '#ffffff',
        border: '1px solid #d9e2ef',
        borderRadius: 16,
        padding: 24,
        boxShadow: '0 10px 30px rgba(16, 35, 63, 0.08)',
        marginBottom: 24,
      }}
    >
      <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12, color: '#5b6b82' }}>
        Semana 10 - Frameworks JavaScript Modernos
      </p>
      <h1 style={{ margin: '8px 0 12px', fontSize: 32 }}>Projeto organizado para entrega</h1>
      <p style={{ margin: 0, lineHeight: 1.6, maxWidth: 840 }}>
        Esta página funciona como índice do material entregue. Use a navegação abaixo para alternar entre os exemplos e,
        nos itens 04 a 07, ver uma prévia dos componentes JSX.
      </p>
    </header>
  );
}

function ExampleList({ selected, onSelect }) {
  return (
    <section style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
      {atividades.map((atividade) => {
        const active = selected === atividade.numero;

        return (
          <button
            key={atividade.numero}
            type="button"
            onClick={() => onSelect(atividade.numero)}
            style={{
              display: 'grid',
              gridTemplateColumns: '56px 1fr auto',
              gap: 12,
              alignItems: 'center',
              width: '100%',
              textAlign: 'left',
              border: active ? '1px solid #10233f' : '1px solid #d9e2ef',
              background: active ? '#edf3fb' : '#ffffff',
              color: '#10233f',
              borderRadius: 16,
              padding: 16,
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                display: 'grid',
                placeItems: 'center',
                background: active ? '#10233f' : '#e8eef7',
                color: active ? '#ffffff' : '#33557c',
                fontWeight: 700,
              }}
            >
              {atividade.numero}
            </span>

            <span>
              <strong style={{ display: 'block', marginBottom: 4 }}>{atividade.titulo}</strong>
              <span style={{ color: '#4a5a70' }}>{atividade.descricao}</span>
            </span>

            <span
              style={{
                fontSize: 12,
                padding: '4px 10px',
                borderRadius: 999,
                background: '#e8eef7',
                color: '#33557c',
                alignSelf: 'start',
              }}
            >
              {atividade.tipo}
            </span>
          </button>
        );
      })}
    </section>
  );
}

const panelStyle = {
  background: '#ffffff',
  border: '1px solid #d9e2ef',
  borderRadius: 16,
  padding: 24,
  boxShadow: '0 10px 30px rgba(16, 35, 63, 0.06)',
};

const titleStyle = {
  margin: '0 0 16px',
  fontSize: 24,
};

const gridPreviewStyle = {
  display: 'grid',
  gap: 16,
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
};

// Componente 01 - JavaScript Básico
function JavaScriptBasico() {
  const produtos = [
    { id: 1, nome: 'Caneta', preco: 2.5 },
    { id: 2, nome: 'Caderno', preco: 12.0 },
  ];

  const calcularTotal = (lista) => lista.reduce((acc, p) => acc + p.preco, 0);
  const total = calcularTotal(produtos);

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ background: '#f0f4f8', padding: 12, borderRadius: 8 }}>
        <strong>Array de produtos:</strong>
        <pre style={{ margin: '8px 0 0', fontSize: 12, overflowX: 'auto' }}>
          {JSON.stringify(produtos, null, 2)}
        </pre>
      </div>
      <div style={{ background: '#e8f7f1', padding: 12, borderRadius: 8 }}>
        <strong>Total calculado:</strong>
        <p style={{ margin: '8px 0 0', fontSize: 18, color: '#10233f' }}>
          R$ {total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

// Componente 02 - Cadastro de Produtos JS Puro
function CadastroProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nomeTrim = nome.trim();
    const precoNum = parseFloat(preco);

    if (!nomeTrim || Number.isNaN(precoNum)) {
      setFeedback('Preencha nome e preço corretamente.');
      return;
    }

    setProdutos([...produtos, { id: produtos.length + 1, nome: nomeTrim, preco: precoNum }]);
    setFeedback('Produto cadastrado com sucesso.');
    setNome('');
    setPreco('');
  };

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr 1fr auto' }}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #d9e2ef', borderRadius: 8 }}
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          step="0.01"
          style={{ padding: '8px 12px', border: '1px solid #d9e2ef', borderRadius: 8 }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            background: '#10233f',
            color: '#ffffff',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
          }}
        >
          Salvar
        </button>
      </form>
      {feedback && (
        <div
          style={{
            background: feedback.includes('sucesso') ? '#e8f7f1' : '#ffe8e8',
            color: feedback.includes('sucesso') ? '#0d5d3c' : '#8b0000',
            padding: 12,
            borderRadius: 8,
          }}
        >
          {feedback}
        </div>
      )}
      {produtos.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {produtos.map((p) => (
            <li
              key={p.id}
              style={{
                padding: '8px 0',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>{p.nome}</span>
              <strong>R$ {p.preco.toFixed(2)}</strong>
            </li>
          ))}
        </ul>
      )}
      {produtos.length === 0 && <p style={{ color: '#4a5a70' }}>Nenhum produto cadastrado.</p>}
    </div>
  );
}

// Componente 03 - Busca de Clientes jQuery
function BuscaClientes() {
  const [termo, setTermo] = useState('');
  const clientesOriginais = [
    { id: 1, nome: 'Ana Silva' },
    { id: 2, nome: 'Bruno Souza' },
    { id: 3, nome: 'Carlos Pereira' },
  ];

  const filtrados = clientesOriginais.filter((c) =>
    c.nome.toLowerCase().includes(termo.toLowerCase())
  );

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <input
        type="text"
        placeholder="Pesquisar por nome"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        style={{
          padding: '8px 12px',
          border: '1px solid #d9e2ef',
          borderRadius: 8,
          fontSize: 14,
        }}
      />
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {filtrados.length > 0 ? (
          filtrados.map((c) => (
            <li
              key={c.id}
              style={{
                padding: '8px 0',
                borderBottom: '1px solid #eee',
              }}
            >
              {c.nome}
            </li>
          ))
        ) : (
          <li style={{ color: '#4a5a70' }}>Nenhum cliente encontrado.</li>
        )}
      </ul>
    </div>
  );
}

function ConteudoExemplo({ selecionado }) {
  const exemplo = atividades.find((item) => item.numero === selecionado) ?? atividades[0];

  if (selecionado === '01') {
    return (
      <section style={panelStyle}>
        <h2 style={titleStyle}>01 - JavaScript básico</h2>
        <JavaScriptBasico />
      </section>
    );
  }

  if (selecionado === '02') {
    return (
      <section style={panelStyle}>
        <h2 style={titleStyle}>02 - Cadastro de produtos com JS puro</h2>
        <CadastroProdutos />
      </section>
    );
  }

  if (selecionado === '03') {
    return (
      <section style={panelStyle}>
        <h2 style={titleStyle}>03 - Busca de clientes com jQuery</h2>
        <BuscaClientes />
      </section>
    );
  }

  if (selecionado === '04') {
    return (
      <section style={panelStyle}>
        <h2 style={titleStyle}>04 - Componentes conceituais</h2>
        <div style={gridPreviewStyle}>
          <CardProduto produto={{ id: 1, nome: 'Notebook', preco: 4599.9 }} />
          <div style={{ display: 'grid', gap: 12 }}>
            <BotaoSalvar onClick={() => window.alert('Ação de salvar simulada.')} />
            <Contador inicial={5} />
          </div>
        </div>
      </section>
    );
  }

  if (selecionado === '05') {
    return (
      <section style={panelStyle}>
        <h2 style={titleStyle}>05 - Dashboard acadêmico</h2>
        <DashboardAluno aluno={alunosExemplo} />
      </section>
    );
  }

  if (selecionado === '06') {
    return (
      <section style={panelStyle}>
        <h2 style={titleStyle}>06 - Tela de clientes componentizada</h2>
        <TelaClientes apiSimulada={apiClientesSimulada} />
      </section>
    );
  }

  if (selecionado === '07') {
    return (
      <section style={panelStyle}>
        <h2 style={titleStyle}>07 - Tela de startups com busca e filtro</h2>
        <TelaStartups startups={startupsExemplo} />
      </section>
    );
  }

  return (
    <section style={panelStyle}>
      <h2 style={titleStyle}>
        {exemplo.numero} - {exemplo.titulo}
      </h2>
      <p style={{ marginTop: 0, lineHeight: 1.6 }}>{exemplo.descricao}</p>
      <p style={{ marginBottom: 0, color: '#4a5a70' }}>
        Arquivo: <strong>{exemplo.arquivo}</strong>
      </p>
    </section>
  );
}

export default function App() {
  const [selecionado, setSelecionado] = useState('01');

  const resumoAtual = useMemo(() => atividades.find((item) => item.numero === selecionado), [selecionado]);

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '32px 20px',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(180deg, #f6f8fc 0%, #eef2f7 100%)',
        color: '#10233f',
      }}
    >
      <section style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AppHeader />

        <ExampleList selected={selecionado} onSelect={setSelecionado} />

        <section style={{ marginBottom: 16 }}>
          <p style={{ margin: 0, color: '#4a5a70' }}>
            Exemplo selecionado: <strong>{resumoAtual.numero}</strong> - {resumoAtual.titulo}
          </p>
        </section>

        <ConteudoExemplo selecionado={selecionado} />
      </section>
    </main>
  );
}
