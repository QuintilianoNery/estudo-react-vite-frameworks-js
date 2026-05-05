# semana10-frameworks-js

Projeto de entrega da Semana 10 - Frameworks JavaScript Modernos.

Este repositório organiza os exemplos da apostila em uma estrutura única para estudo e entrega. A página inicial do Vite funciona como índice visual do material.

## Estrutura entregue

- `01-javascript-basico/script.js`
- `02-cadastro-produtos-js-puro/index.html`
- `03-busca-clientes-jquery/index.html`
- `04-componentes-conceituais/BotaoSalvar.jsx`
- `04-componentes-conceituais/CardProduto.jsx`
- `04-componentes-conceituais/Contador.jsx`
- `05-dashboard-academico/DashboardAluno.jsx`
- `06-tela-clientes-componentizada/TelaClientes.jsx`
- `07-startups-componentizado/TelaStartups.jsx`

## Como executar

1. Instale as dependências do projeto React/Vite:

   ```bash
   npm install
   ```

2. Abra a aplicação principal com:

   ```bash
   npm run dev
   ```

3. Para ver os exemplos em HTML/JavaScript puro, abra diretamente no navegador:

   - `http://localhost:5173/02-cadastro-produtos-js-puro/`
   - `http://localhost:5173/03-busca-clientes-jquery/`

## Tecnologias utilizadas

- JavaScript ES6+
- jQuery no exemplo legado
- React nos exemplos em JSX
- Vite como ambiente de desenvolvimento

## Respostas da atividade

### 1. Diferença entre JavaScript puro, jQuery e componentes

JavaScript puro trabalha diretamente com a API nativa do navegador e deixa a lógica mais explícita. jQuery simplifica o DOM e foi muito útil em sistemas legados. Componentes em React organizam a interface em partes reutilizáveis, com estado e props, o que melhora a manutenção em sistemas maiores.

### 2. Exemplo mais fácil de entender

O exemplo de JavaScript puro e o cadastro de produtos foram os mais simples de acompanhar, porque mostram claramente a sequência evento, validação, atualização do estado e renderização da interface.

### 3. Exemplo mais organizado para um sistema maior

A abordagem baseada em componentes é a mais organizada para sistemas grandes, porque separa responsabilidades, favorece reuso e deixa o código mais previsível.

### 4. O que é um componente

Componente é uma unidade independente de interface que recebe dados, pode ter comportamento próprio e pode ser combinada com outros componentes.

### 5. O que é estado em uma interface

Estado é o conjunto de dados que determina o que aparece na tela em um momento específico. Quando o estado muda, a interface deve refletir essa mudança.

## Observações

- Os arquivos possuem comentários explicando as partes principais do código.
- Os exemplos em JSX foram organizados para leitura e estudo, conforme solicitado na atividade.
