# Prompts - CP3: CRUD e IA Generativa

## IAs consultadas

* ChatGPT (OpenAI)
* Gemini (Google)
* DeepSeek

---

# Prompt Inicial

Crie uma aplicação web de CRUD com o tema "Combinações de Roupas", utilizando apenas HTML, CSS e JavaScript puro.

A aplicação deve iniciar com uma tela de login.

Usuário: aluno

Senha: fiap2025

Se o login estiver correto, exibir a lista de combinações de roupas. Caso esteja incorreto, exibir uma mensagem de erro na tela.

### Lista com CRUD

* Adicionar combinação no início da lista
* Adicionar combinação no final da lista
* Exibir dinamicamente todas as combinações cadastradas
* Editar combinações individualmente
* Remover combinações individualmente

### Regras

* A lista deve iniciar com pelo menos 3 combinações cadastradas
* Utilizar um array simples de strings
* Não permitir campos vazios
* Exibir mensagens de erro na tela
* Ao editar, se o usuário cancelar ou deixar o campo vazio, manter o valor original
* A remoção deve ocorrer pelo índice do item e não pelo valor do texto
* Atualizar a interface automaticamente após qualquer alteração
* Organizar a lógica em funções nomeadas
* Não utilizar frameworks ou bibliotecas externas
* Separar HTML, CSS e JavaScript em arquivos distintos

---

# Prompt Final (Refinado)

Desenvolva uma aplicação web utilizando apenas HTML, CSS e JavaScript puro.

Tema: FashionList - Combinações de Roupas.

A aplicação deve iniciar com uma tela de login.

Credenciais:

* Usuário: aluno
* Senha: fiap2025

### Validações do Login

* Não permitir campos vazios.
* Exibir mensagens de erro diretamente na interface.
* Não utilizar alert() para validações.

### Funcionalidades do CRUD

* Adicionar combinação no início da lista.
* Adicionar combinação no final da lista.
* Exibir todas as combinações dinamicamente.
* Editar combinações individualmente.
* Remover combinações individualmente.

### Regras de Negócio

* Utilizar um array simples de strings.
* Não utilizar objetos.
* Iniciar com pelo menos 3 combinações cadastradas.
* Não permitir cadastro de combinações vazias.
* Caso o usuário cancele a edição ou deixe o campo vazio, manter o valor original.
* Remover itens utilizando o índice da posição no array.
* Atualizar automaticamente a interface após qualquer alteração.

### Requisitos Técnicos

* Utilizar funções nomeadas.
* Não utilizar frameworks ou bibliotecas externas.
* Separar HTML, CSS e JavaScript em arquivos distintos.
* Criar uma interface organizada, moderna e fácil de explicar em uma apresentação acadêmica.

---

# Análise das respostas

## ChatGPT

* Solução funcional e organizada.
* Interface visual simples.
* Algumas validações precisaram de ajustes para atender completamente aos requisitos da atividade.

## Gemini

* Código organizado e fácil de compreender.
* Estrutura simples para apresentação.
* Atendeu praticamente todos os requisitos.
* Necessitou apenas de pequenos ajustes visuais e de validação.

## DeepSeek

* Interface moderna e visualmente mais elaborada.
* Código mais complexo.
* Incluiu funcionalidades extras que não eram necessárias para a atividade.

---

# IA escolhida como base

## Gemini

O Gemini foi escolhido por apresentar o melhor equilíbrio entre organização, simplicidade e atendimento aos requisitos da atividade.

Sua estrutura era clara, fácil de explicar e já atendia à maior parte do que foi solicitado, exigindo apenas pequenas melhorias.

### Ajustes realizados

* Correção da referência ao arquivo JavaScript utilizando a propriedade `src`.
* Inclusão da validação de campos vazios no login.
* Inclusão de mensagens de erro diretamente na interface.
* Inclusão da validação para impedir cadastro de combinações vazias.
* Melhoria visual com cores suaves relacionadas ao tema moda.
* Adição de fundo em gradiente e layout centralizado.
* Personalização dos botões de edição e exclusão.
* Inclusão de um contador de combinações cadastradas.
* Personalização do projeto com o tema FashionList - Combinações de Roupas.

### Combinações iniciais utilizadas

* Blusa rosa + saia midi + sapatilha
* Vestido floral + jaqueta jeans + tênis branco
* Camisa branca + calça preta + salto nude

