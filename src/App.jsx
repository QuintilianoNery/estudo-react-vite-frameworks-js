import React, { useState, useMemo, useRef } from 'react';
import BotaoSalvar from '../04-componentes-conceituais/BotaoSalvar.jsx';
import CardProduto from '../04-componentes-conceituais/CardProduto.jsx';
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

// ========== Funções Utilitárias para Cadastro de Produtos ==========

// Valida se o nome e preço são válidos
const validarProduto = (nome, preco) => {
  const nomeTrim = nome.trim();
  const precoNum = parseFloat(preco);
  return {
    valido: nomeTrim.length > 0 && !Number.isNaN(precoNum) && precoNum > 0,
    nome: nomeTrim,
    preco: precoNum,
  };
};

// Calcula o total dos produtos usando reduce
const calcularTotalProdutos = (listaProdutos) => {
  return listaProdutos.reduce((total, produto) => total + produto.preco, 0);
};

// Formata um valor numérico para moeda brasileira
const formatarMoeda = (valor) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
};

// Componente 02 - Cadastro de Produtos JS Puro
function CadastroProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [feedback, setFeedback] = useState('');
  const proximoId = useRef(1);

  // Calcula o total dos produtos
  const total = useMemo(() => calcularTotalProdutos(produtos), [produtos]);

  // Handler para submit do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const validacao = validarProduto(nome, preco);

    if (!validacao.valido) {
      setFeedback('Preencha nome e preço corretamente. O preço deve ser maior que zero.');
      return;
    }

    const novoProduto = {
      id: proximoId.current,
      nome: validacao.nome,
      preco: validacao.preco,
    };

    proximoId.current += 1;
    setProdutos([...produtos, novoProduto]);
    setFeedback('Produto cadastrado com sucesso.');
    setNome('');
    setPreco('');
  };

  const handleDelete = (produtoId) => {
    setProdutos((produtosAtuais) => produtosAtuais.filter((produto) => produto.id !== produtoId));
    setFeedback('Produto removido com sucesso.');
  };

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {/* Seção de Formulário */}
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr 1fr auto' }}>
        <input
          type="text"
          placeholder="Nome do produto"
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
          min="0"
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
            fontWeight: 600,
          }}
        >
          Salvar
        </button>
      </form>

      {/* Feedback de Validação */}
      {feedback && (
        <div
          style={{
            background: feedback.includes('sucesso') ? '#e8f7f1' : '#ffe8e8',
            color: feedback.includes('sucesso') ? '#0d5d3c' : '#8b0000',
            padding: 12,
            borderRadius: 8,
            fontSize: 14,
          }}
        >
          {feedback}
        </div>
      )}

      {/* Lista de Produtos */}
      {produtos.length > 0 ? (
        <div style={{ display: 'grid', gap: 12 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {produtos.map((p) => (
              <li
                key={p.id}
                style={{
                  padding: '12px 0',
                  borderBottom: '1px solid #eee',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <span style={{ color: '#10233f', flex: 1 }}>{p.nome}</span>
                <strong style={{ color: '#10233f' }}>{formatarMoeda(p.preco)}</strong>
                <button
                  type="button"
                  onClick={() => handleDelete(p.id)}
                  aria-label={`Excluir produto ${p.nome}`}
                  title="Excluir produto"
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: '#c62828',
                    cursor: 'pointer',
                    padding: '4px 6px',
                    lineHeight: 1,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
              </li>
            ))}
          </ul>

          {/* Total */}
          <div
            style={{
              padding: 12,
              background: '#f0f4f8',
              borderRadius: 8,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '2px solid #10233f',
            }}
          >
            <strong style={{ color: '#10233f' }}>Total de {produtos.length} produto(s):</strong>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#10233f' }}>{formatarMoeda(total)}</span>
          </div>
        </div>
      ) : (
        <p style={{ color: '#4a5a70', textAlign: 'center', padding: '16px 0' }}>
          Nenhum produto cadastrado. Adicione um para começar.
        </p>
      )}
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
        <div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
          <CardProduto
            produto={{ id: 1, nome: 'Notebook', preco: 4599.9 }}
            mostrarContador={true}
            contadorInicial={5}
          />
          <BotaoSalvar onClick={() => window.alert('Ação de salvar simulada.')} />
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
