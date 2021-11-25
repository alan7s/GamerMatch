# Projeto Web GamerMatch
Find your clan ~~ Encontre seu clan para jogar.

## Implementações

- Gestão de usuários:
  1. [ ] Receber e-mail ao se cadastrar
  1. [ ] Fluxo de "esqueci minha senha"
  1. [ ] Integração com autenticação por 3ºs
  1. [ ] Possibilidade de alterar dados do perfil
- Engenharia de Software:
  1. [ ] Testes automatizados
  1. [ ] Processo de _build_ para _assets_ do _front-end_:
     - [ ] Minimizar arquivos CSS e JS
     - [ ] Eliminação de código morto JS
     - [ ] Otimização de imagens
     - [ ] Pré-processamento de CSS e JS
  1. [ ] Integração contínua durante o desenvolvimento
     (_build_ + teste + _deploy_)
     - Não adianta apenas _build_ + _deploy_, tem que ter testes
  1. [ ] Uso de _containers_ (eg Docker) para isolar ambientes
     e torná-los facilmente reprodutíveis
  1. [ ] Descrição das tarefas seguindo modelo de histórias de usuário
     - [ ] Uso de _pull requests_ (PRs) para cada história
       - [ ] _Code review_ de todos os PRs
- Integração:
  1. [ ] APIs de terceiros para fornecer dados do usuário
     (eg, biblioteca de jogos no Steam, músicas do usuário no Spotify)
  1. [ ] APIs "cosméticas" (eg, previsão do tempo para fazer
     algum efeitinho)
  1. [ ] APIs de serviço de hospedagem (eg, da AWS para
     armazenar fotos enviadas por usuários)
- Inteligência:
  1. [ ] Alguma inteligência além de um CRUD. Exemplos:
     - Algoritmos de recuperação da informação
     - Algoritmos de aprendizado de máquina
     - Algoritmos de alocação de recursos/tarefas, _match-making_,
       problema da mochila, determinação de caminhos...
     - Algoritmos de computação gráfica _off-line_ (eg, _ray tracing_)
- _Back-end_:
  1. [ ] Agendamento de funções do _back-end_ para executar de
     tempos em tempos (eg, processar o ataque do reino de um jogador a outro)
  1. [ ] Uso de uma fila para execução de tarefas mais demoradas
  1. [ ] Propagação de atualização do _back-end_ para o _front-end_
     (eg, usando Web Sockets diretamente ou alguns bancos NoSQL reativos)
  1. [ ] Camada de dados RESTful
  1. [ ] Camada de dados GraphQL
  1. [ ] _Upload_ de arquivos
- _Front-end_:
  1. [ ] Todas as páginas _responsive_
  1. [ ] Modo escuro
  1. [ ] Animações, transições e efeitos visuais diversos
     (onde fizer sentido e sem exageros)
     - [ ] Modo com menos animações
  1. [ ] Modo de impressão (se fizer sentido)
  1. [ ] Organização do código em componentes
  1. [ ] Uso de APIs do HTML5
  1. [ ] Interatividade para melhorar a experiência de uso

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
   - Data: 08/02/2022

[elevator]: https://en.wikipedia.org/wiki/Elevator_pitch
[swot]: https://en.wikipedia.org/wiki/SWOT_analysis