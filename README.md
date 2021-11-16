# Projeto Web GamerMatch
Find your clan

## Implementações

- Gestão de usuários:
  1. [ ] (4%) Receber e-mail ao se cadastrar
  1. [ ] (5%) Fluxo de "esqueci minha senha"
  1. [ ] (5%) Integração com autenticação por 3ºs
  1. [ ] (3-7%) Possibilidade de alterar dados do perfil
- Engenharia de Software:
  1. [ ] (1-10%) Testes automatizados
  1. [ ] (2-6%) Processo de _build_ para _assets_ do _front-end_:
     - [ ] Minimizar arquivos CSS e JS
     - [ ] Eliminação de código morto JS
     - [ ] Otimização de imagens
     - [ ] Pré-processamento de CSS e JS
  1. [ ] (6%) Integração contínua durante o desenvolvimento
     (_build_ + teste + _deploy_)
     - Não adianta apenas _build_ + _deploy_, tem que ter testes
  1. [ ] (5%) Uso de _containers_ (eg Docker) para isolar ambientes
     e torná-los facilmente reprodutíveis
  1. [ ] (5%) Descrição das tarefas seguindo modelo de histórias de usuário
     - [ ] (+5%) Uso de _pull requests_ (PRs) para cada história
       - [ ] (+5%) _Code review_ de todos os PRs
- Integração:
  1. [ ] (5-10%) APIs de terceiros para fornecer dados do usuário
     (eg, biblioteca de jogos no Steam, músicas do usuário no Spotify)
  1. [ ] (3-7%) APIs "cosméticas" (eg, previsão do tempo para fazer
     algum efeitinho)
  1. [ ] (6%) APIs de serviço de hospedagem (eg, da AWS para
     armazenar fotos enviadas por usuários)
- Inteligência:
  1. [ ] (5-15%) Alguma inteligência além de um CRUD. Exemplos:
     - Algoritmos de recuperação da informação
     - Algoritmos de aprendizado de máquina
     - Algoritmos de alocação de recursos/tarefas, _match-making_,
       problema da mochila, determinação de caminhos...
     - Algoritmos de computação gráfica _off-line_ (eg, _ray tracing_)
- _Back-end_:
  1. [ ] (5%) Agendamento de funções do _back-end_ para executar de
     tempos em tempos (eg, processar o ataque do reino de um jogador a outro)
  1. [ ] (5-9%) Uso de uma fila para execução de tarefas mais demoradas
  1. [ ] (6%) Propagação de atualização do _back-end_ para o _front-end_
     (eg, usando Web Sockets diretamente ou alguns bancos NoSQL reativos)
  1. [ ] (4%) Camada de dados RESTful
  1. [ ] (7%) Camada de dados GraphQL
  1. [ ] (6%) _Upload_ de arquivos
- _Front-end_:
  1. [ ] (8%) Todas as páginas _responsive_
  1. [ ] (5%) Modo escuro
  1. [ ] (2-5%) Animações, transições e efeitos visuais diversos
     (onde fizer sentido e sem exageros)
     - [ ] (2%) Modo com menos animações
  1. [ ] (3%) Modo de impressão (se fizer sentido)
  1. [ ] (5%) Organização do código em componentes
  1. [ ] (3-14%) Uso de APIs do HTML5
  1. [ ] (2-10%) Interatividade para melhorar a experiência de uso

## Entregas

O projeto será entregue em 3 etapas, a saber:

1. Primeira entrega:
   - Entregável:
     1. [descrição de elevador][elevator]
     1. um protótipo "em papel" (ou usando algum software) das principais
        telas do sistema (eg, não precisa da tela de cadastro/login porque
        elas são "arroz com feijão")
     1. [matriz swot][swot] relatando as forças, oportunidades,
        fraquezas e ameaças do produto
   - Data: 17/11/2021
   - Meta: entregável completo, bem descrito e dentro do prazo
1. Segunda entrega: _front-end_
   - Entregável:
     1. URL do(s) repositório(s) contendo todas as páginas
        mas usando dados _mocked_ (se o _back-end_ for feito em
        outro repositório, entregar sua URL também)
   - Data: 05/01/2021
   - Meta: entregável completo já com a maior parte dos opcionais
     de _front-end_
1. Entrega final: _back-end_ + _front-end_
   - Entregável:
     1. _link_ para sistema publicado em servidor gratuito,
     1. lista de itens opcionais implementados
   - Data: 20/02/2022

[elevator]: https://en.wikipedia.org/wiki/Elevator_pitch
[swot]: https://en.wikipedia.org/wiki/SWOT_analysis