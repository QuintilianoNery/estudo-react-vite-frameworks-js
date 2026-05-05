# semana10-frameworks-js

Projeto de entrega da Semana 10 - Frameworks JavaScript Modernos.

O repositório foi organizado na infraestrutura padrão do Vite: a aplicação React fica em `src/`, os exemplos estáticos ficam em `public/` e a página principal funciona como índice visual do material.

## Estrutura entregue

- `src/App.jsx`
- `src/main.jsx`
- `src/components/04-componentes-conceituais/BotaoSalvar.jsx`
- `src/components/04-componentes-conceituais/CardProduto.jsx`
- `src/components/04-componentes-conceituais/Contador.jsx`
- `src/components/05-dashboard-academico/DashboardAluno.jsx`
- `src/components/06-tela-clientes-componentizada/TelaClientes.jsx`
- `src/components/07-startups-componentizado/TelaStartups.jsx`
- `src/constants/colors.js`
- `src/constants/sizes.js`
- `src/constants/styles.js`
- `src/data/mockData.js`
- `public/01-javascript-basico/script.js`
- `public/02-cadastro-produtos-js-puro/index.html`
- `public/03-busca-clientes-jquery/index.html`

## Como executar

1. Instale as dependências do projeto:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento do Vite:

   ```bash
   npm run dev
   ```

3. Abra os exemplos estáticos diretamente pelas rotas do Vite:

   - `http://localhost:5173/01-javascript-basico/script.js`
   - `http://localhost:5173/02-cadastro-produtos-js-puro/`
   - `http://localhost:5173/03-busca-clientes-jquery/`

## Tecnologias utilizadas

- JavaScript ES6+
- jQuery no exemplo legado
- React nos exemplos em JSX
- Vite como ambiente de desenvolvimento

## Respostas da atividade

### 1. Diferença entre JavaScript puro, jQuery e componentes

JavaScript puro trabalha diretamente com a API nativa do navegador e deixa a lógica mais explícita. jQuery simplifica o DOM e foi muito útil em sistemas legados. Componentes em React utilizam a interface em partes reutilizáveis, com estado e props, o que melhora a manutenção em sistemas maiores.

### 2. Exemplo mais fácil de entender

O exemplo de JavaScript puro e o cadastro de produtos foram os mais simples de acompanhar, porque mostram claramente a sequência evento, validação, atualização do estado e renderização da interface.

### 3. Exemplo mais organizado para um sistema maior

A abordagem baseada em componentes é a mais organizada para sistemas grandes, porque separa responsabilidades, favorece reuso e deixa o código mais previsível.

### 4. O que é um componente

Componente é uma unidade independente de interface que recebe dados, pode ter comportamento próprio e pode ser combinada com outros componentes.

### 5. O que é estado em uma interface

Estado é o conjunto de dados que determina o que aparece na tela em um momento específico. Quando o estado muda, a interface deve refletir essa mudança.

## Observações

- Os exemplos React foram movidos para `src/components` para seguir a organização do Vite.
- Os exemplos estáticos foram colocados em `public/` para manter os caminhos diretos.
- Os exemplos em JSX foram organizados para leitura e estudo, conforme solicitado na atividade.
