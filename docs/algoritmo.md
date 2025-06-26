# Documentação da Lógica da Lista de Tarefas

## Visão Geral

Este documento explica a lógica de funcionamento do projeto **Lista de Tarefas** desenvolvido em React.js. O objetivo é detalhar como as tarefas são adicionadas, exibidas, marcadas como concluídas e removidas.

---

## Estrutura Geral

- O componente principal (`App.jsx`) mantém o estado das tarefas usando o hook `useState`.
- A lógica da manipulação das tarefas está encapsulada no hook customizado `useTasks.js`.
- Componentes funcionais dividem responsabilidades:
  - `TaskForm.jsx` para adicionar novas tarefas.
  - `TaskItem.jsx` para exibir cada tarefa individualmente.
  - `TaskList.jsx` para listar todas as tarefas.

---

## Hook useTasks.js

Este hook gerencia o estado e as funções para manipular as tarefas:

### Estado

- `tasks` — array de objetos, cada um representando uma tarefa, com as propriedades:
  - `id` (único)
  - `text` (descrição da tarefa)
  - `completed` (booleano que indica se a tarefa está concluída)

### Funções

- **addTask(text)**  
  Adiciona uma nova tarefa ao array `tasks` com o texto fornecido e `completed` inicializado como `false`.

- **toggleTaskCompleted(id)**  
  Alterna o valor `completed` da tarefa com o `id` informado, marcando-a como concluída ou não.

- **removeTask(id)**  
  Remove a tarefa com o `id` informado do array `tasks`.

---

## Fluxo de Dados

1. O usuário digita uma nova tarefa no formulário (`TaskForm`) e envia.
2. `addTask` é chamado via `useTasks`, adicionando a tarefa ao estado.
3. O componente `TaskList` recebe a lista atualizada e renderiza cada tarefa com `TaskItem`.
4. Ao clicar para marcar uma tarefa como concluída, `toggleTaskCompleted` atualiza o estado.
5. Ao clicar para remover, `removeTask` atualiza o estado removendo a tarefa.
6. O React atualiza a interface automaticamente refletindo as mudanças.

---

## Diagrama Simplificado

Usuário
|
v
TaskForm -- addTask(text) --> useTasks (tasks)
|
v
TaskList (recebe tasks)
|
v
TaskItem (exibe tarefa)
| |
toggle remove
completed tarefa

---

## Considerações Técnicas

- Cada tarefa tem um `id` único para facilitar identificação nas operações.
- O estado é imutável: atualizações criam novas versões do array `tasks` para respeitar o princípio do React.
- Uso do hook `useState` dentro de `useTasks` para centralizar a lógica.
- Testes automatizados garantem que as funções de adicionar, remover e marcar tarefas funcionam corretamente.


