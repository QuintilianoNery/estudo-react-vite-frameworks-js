/**
 * Dados de exemplo (mockData)
 */

export const atividades = [
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

export const alunosExemplo = {
  nome: 'Mariana Lima',
  matricula: '2026.10.1842',
  cursosCursando: [
    { id: 1, nome: 'Front End II', nota: 9.4 },
    { id: 2, nome: 'Banco de Dados', nota: 8.7 },
    { id: 3, nome: 'Frameworks JavaScript', nota: 9.1 },
  ],
};

export const startupsExemplo = [
  { id: 1, nome: 'Nexa Labs', setor: 'EdTech' },
  { id: 2, nome: 'InnovateLabs', setor: 'IA/ML' },
  { id: 3, nome: 'TechStart', setor: 'Fintech' },
  { id: 4, nome: 'DataFlow', setor: 'Data Science' },
  { id: 5, nome: 'CloudHub', setor: 'Cloud' },
  { id: 6, nome: 'SecureCode', setor: 'Segurança' },
  { id: 7, nome: 'GreenEnergy', setor: 'Sustentabilidade' },
];

export const clientesExemplo = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com' },
  { id: 2, nome: 'Maria Santos', email: 'maria@email.com' },
  { id: 3, nome: 'Pedro Oliveira', email: 'pedro@email.com' },
  { id: 4, nome: 'Ana Costa', email: 'ana@email.com' },
  { id: 5, nome: 'Carlos Gomes', email: 'carlos@email.com' },
];
