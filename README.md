# semana10-frameworks-js

Projeto de entrega da Semana 10 — Frameworks JavaScript Modernos.

Estrutura entregue (resumida):

- 01-javascript-basico/script.js
- 02-cadastro-produtos-js-puro/index.html
- 03-busca-clientes-jquery/index.html
- 04-componentes-conceituais/BotaoSalvar.jsx
- 04-componentes-conceituais/CardProduto.jsx
- 04-componentes-conceituais/Contador.jsx
- 05-dashboard-academico/DashboardAluno.jsx
- 06-tela-clientes-componentizada/TelaClientes.jsx
- 07-startups-componentizado/TelaStartups.jsx

Instalação e execução (opcional — há exemplos HTML que podem ser abertos diretamente no navegador):

1. Instalar dependências:

   ```bash
   npm install
   ```

2. Rodar em modo desenvolvimento:

   ```bash
   npm run dev
   ```

Tecnologias utilizadas:

- JavaScript (ES6+)
- jQuery (apenas no exemplo legado)
- React (componentes em JSX)
- Vite (configuração mínima para executar os componentes React)

Respostas solicitadas

1) Qual é a diferença entre JavaScript puro, jQuery e uma abordagem baseada em componentes?

- JavaScript puro: interação direta com o DOM usando a API nativa; é leve e não exige dependências, mas tende a gerar lógica acoplada ao HTML quando o projeto cresce.
- jQuery: biblioteca criada para simplificar a manipulação do DOM e compatibilidade entre navegadores; facilita operações em projetos legados, mas pode incentivar código menos modular.
- Componentes (React): abordagem declarativa onde a interface é descrita como composição de componentes reutilizáveis; o estado e os efeitos controlam a renderização, tornando o código mais previsível e fácil de manter.

2) Qual exemplo você achou mais fácil de entender? Por quê?

- Exemplo mais fácil: o exemplo de JavaScript puro (01) e o de cadastro (02) são diretos e fáceis de seguir porque exibem a relação entre evento -> manipulação de estado -> atualização de interface sem camadas adicionais.

3) Qual exemplo parece mais organizado para um sistema maior? Justifique.

- A abordagem baseada em componentes (React) é mais organizada para sistemas maiores: componentes pequenos e com responsabilidade única, estado local/compartilhado bem delimitado, e melhor testabilidade e reusabilidade.

4) O que você entendeu por componente?

- Componente é uma unidade de UI com responsabilidade clara que recebe props e, possivelmente, mantém estado; pode ser reutilizada e composta para formar interfaces maiores.

5) O que você entendeu por estado em uma interface?

- Estado é a representação dos dados que influenciam a UI em um dado momento. Mudanças no estado devem provocar re-render da interface para refletir os dados atualizados.

Observações finais

- Comentários explicativos foram adicionados nos arquivos para explicar o funcionamento das partes principais.
- Os exemplos em HTML podem ser abertos diretamente no navegador. Os componentes em JSX têm export default e podem ser executados via Vite conforme instruções acima.
