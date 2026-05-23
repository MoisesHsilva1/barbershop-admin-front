# Barbershop Admin

> Um aplicativo moderno para agendamento e gerenciamento de barbearias.

## Visão Geral

**Qual problema resolve:** Otimiza as operações diárias de uma barbearia, gerenciando agendamentos, serviços e a agenda dos funcionários de forma eficiente.

**Objetivo principal:** Fornecer uma base arquitetural frontend robusta e de alta manutenibilidade, otimizando a experiência do desenvolvedor por meio de um fluxo de trabalho estruturado com auxílio de IA.

**Usuários-alvo:** Donos de barbearias, administradores e recepcionistas.

**Por que o projeto existe:** Para consolidar uma arquitetura frontend avançada (React, TypeScript) com um fluxo de desenvolvimento moderno focado em IA (Cursor AI), garantindo código limpo, alta manutenibilidade e entrega rápida e consistente de features.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Fluxo de Desenvolvimento com IA](#fluxo-de-desenvolvimento-com-ia)
- [Fluxo de Desenvolvimento](#fluxo-de-desenvolvimento)
- [Pipeline de Deploy](#pipeline-de-deploy)
- [Como Começar](#como-começar)
- [Rodando os Testes](#rodando-os-testes)
- [Melhores Práticas](#melhores-práticas)
- [Como Contribuir](#como-contribuir)

## Tecnologias

### Frontend
- **Framework:** React + Vite
- **Linguagem:** TypeScript
- **Roteamento:** React Router

### Gerenciamento de Estado
- **Data Fetching e Estado do Servidor:** TanStack Query (React Query)

### Validação
- **Formulários:** React Hook Form
- **Validação de Schema:** Zod

### UI (Interface de Usuário)
- **Estilização:** CSS
- **Componentes Primitivos:** Radix UI
- **Componentes Base:** Shadcn UI

### API
- **Cliente HTTP:** Axios

### Testes
- **Framework:** Vitest + Testing Library

### Ferramentas de Desenvolvimento
- **Assistente de IA:** Cursor AI

## Arquitetura do Projeto

Este projeto segue estritamente uma adaptação da metodologia **Atomic Design**, enfatizando uma separação clara de responsabilidades entre regras de negócio, busca de dados (data fetching) e apresentação.

### Decisões Arquiteturais
- **Separação de Responsabilidades:** A lógica de negócios é abstraída em custom hooks e services. Os componentes permanecem focados apenas em renderizar a interface e lidar com interações do usuário.
- **Por que Atomic Design:** A adaptação do Atomic Design (Atoms, Molecules, Organisms, Templates, Pages) fornece um modelo mental claro para os desenvolvedores, incentiva o reuso de componentes e evita o inchaço da camada visual (UI).
- **Escalabilidade:** Ao isolar as chamadas de API em uma camada de `services/` e gerenciar o estado global com TanStack Query, a aplicação pode crescer facilmente à medida que novas features são adicionadas.

### Estrutura de Pastas

```text
src/
├── api/            # Configuração da instância do Axios e interceptors
├── assets/         # Arquivos estáticos (imagens, fontes, ícones globais)
├── components/     # Componentes de interface estruturados semanticamente
│   ├── ui/         # Componentes base e primitivos (Atoms - ex: Button, Input)
│   ├── molecules/  # Componentes compostos (ex: Form Fields, Service Cards)
│   ├── organisms/  # Seções complexas e com estado (ex: Tables, Dialogs)
│   ├── templates/  # Estruturas de layout das páginas
│   └── pages/      # Camada de apresentação das rotas, conectando lógica e UI
├── config/         # Configuração de variáveis de ambiente validadas
├── constants/      # Constantes estáticas e opções de configuração
├── hooks/          # Custom hooks (lógica de negócios e integrações com TanStack Query)
├── lib/            # Configurações de bibliotecas de terceiros (ex: utils, query-client)
├── routes/         # Configurações do React Router e definição de caminhos
├── schema/         # Schemas de validação Zod para formulários e payloads de API
├── services/       # Camada de abstração de API (isolando o frontend do backend)
├── types/          # Definições de tipos e interfaces TypeScript globais
└── utils/          # Funções utilitárias puras, formatadores e helpers
```

## Fluxo de Desenvolvimento com IA

Este workspace foi explicitamente projetado para integrar a inteligência artificial perfeitamente ao processo de desenvolvimento. Em vez de depender de prompts longos e repetitivos, o contexto da IA é sistematicamente organizado em **Rules**, **Skills** e **Commands**.

### Rules (`.cursor/rules/`)
As Rules definem **como o projeto funciona**. Elas garantem que a IA entenda a arquitetura, estrutura de pastas, stack tecnológica e convenções do projeto antes de gerar qualquer código.
> **Benefício:** Você não precisa instruir a IA a usar "React Hook Form" ou "Atomic Design" nos seus prompts. Esse contexto é aplicado automaticamente.
- *Exemplos:* `architecture-rules.mdc`, `frontend-rules.mdc`, `state-rules.mdc`

### Skills (`.cursor/skills/`)
As Skills atuam como **agentes especialistas**. Elas instruem a IA sobre **como executar uma tarefa específica** de acordo com os padrões estabelecidos do projeto.
- *Exemplos:* `create-feature.mdc`, `create-schema.mdc`, `refactor.mdc`
- *Uso:* `Generate commits for current changes with generate-commit skill`

### Commands (`.cursor/commands/`)
Commands são **atalhos rápidos** usados para acionar fluxos de trabalho específicos e especialistas, evitando a digitação repetitiva.
- *Exemplos:* `/explain`

### Prompts de Feature Requests
Como o "COMO" (arquitetura, bibliotecas, execução) já está definido pelas Rules e Skills, seus prompts devem focar puramente no **"O QUE"** (requisitos de negócio, regras de validação, payloads de API).

> **Importante:** Os prompts devem ser escritos em inglês para reduzir a ambiguidade e prevenir alucinações da IA.

#### Modelo de Prompt

<details>
<summary>Clique para ver o Modelo de Prompt de Feature Request (em Inglês)</summary>

```markdown
# Feature Request

## Goal
Implement the feature: [describe feature objective]
*Example: Implement user authentication with login and logout functionality.*

## Business Context
Describe the problem being solved: [describe business need]
*Example: Users need authentication to access protected routes and personalized data.*

## Functional Requirements
List expected behaviors:
- [requirement 1]
- [requirement 2]

*Example:*
- *User can enter email and password*
- *Validate fields before submission*
- *Show loading state while submitting*
- *Redirect after successful login*

## UI Requirements
Describe UI expectations:
- [ui requirement]

*Example:*
- *Use shadcn/ui*
- *Mobile first & Responsive*
- *Follow accessibility rules*

## Data Requirements
**Request structure:**
```typescript
interface LoginRequest {
  email: string;
  password: string;
}
**Response structure:**
interface LoginResponse {
  token: string;
  user: User;
}

**API endpoints:**
- `POST /auth/login`
- `POST /auth/logout`

## Validation Rules
- [rule 1]

*Example:*
- *email is required and must be valid*
- *password minimum 8 characters*

## State Requirements
- **Local:** [if needed]
- **Global:** [authenticated user state]
- **Server:** [current user data]

## Edge Cases
Consider:
- Network failures
- Empty states
- Unauthorized access

## Expected Deliverables
Create everything necessary following project rules:
- schemas, interfaces, services, hooks, components, routes, tests.
Do not skip implementation details. Follow project architecture strictly.
```
</details>

## Fluxo de Desenvolvimento

A sequência a seguir ilustra o ciclo de vida de uma feature, desde a concepção até o deploy dentro deste workspace assistido por IA:

```
ideia
↓
Criação do Feature Request
↓
IA lê as Rules
↓
IA usa Skills
↓
Geração de Código
↓
Revisão do Desenvolvedor
↓
Refatoração
↓
Testes
↓
Geração de Commit
↓
Pull Request
```


## Pipeline de Deploy

Nosso pipeline automatizado de CI/CD garante a qualidade e a confiabilidade do código antes que ele chegue à produção:


```
Instalação dependências
↓
Build
↓
Tests
↓
Security
↓
Deploy

```

## Como Começar

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MoisesHsilva1/barbershop-admin-front.git
   cd barbershop-admin
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configuração de ambiente:**
   Duplique o arquivo de exemplo e configure suas variáveis de ambiente locais.
   ```bash
   cp .env.example .env
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:5173`.

## Rodando os Testes

Para executar os testes unitários e de integração, rode:

```bash
npm run test
```

## Melhores Práticas

Para manter a consistência em todo o código, siga estas diretrizes:

- **Convenções de Nomenclatura:**
  - Arquivos e Pastas: `kebab-case` (ex: `service-card.tsx`, `use-services.ts`).
  - Componentes React: `PascalCase` (ex: `ServiceCard`).
  - Variáveis/Funções: `camelCase` (ex: `fetchServices`).
- **Regras de Arquitetura:** Respeite estritamente a estrutura do Atomic Design. Não coloque regras de negócio dentro de componentes de UI; use custom hooks.
- **Responsabilidades dos Componentes:**
  - `ui/`: Puramente visuais e altamente reutilizáveis. Sem lógica de domínio.
  - `pages/`: Conectam a lógica de domínio (hooks) à camada de apresentação.
- **Diretrizes de Uso da IA:** A IA é uma ferramenta, não um substituto para o julgamento de engenharia. Sempre revise o código gerado. Nunca realize um commit de código gerado por IA sem testes.
- **Recomendações para Prompts:** Mantenha os prompts declarativos. Foque nas estruturas exatas de dados e nos requisitos de negócio, em vez de dizer à IA *como* escrever um componente.

## Como Contribuir

1. Faça um Fork do repositório.
2. Crie uma branch de feature: `git checkout -b feature/minha-nova-feature`
3. Faça o commit das suas mudanças (use a skill da IA `generate-commit` para mensagens padronizadas).
4. Faça o push para a branch: `git push origin feature/minha-nova-feature`
5. Abra um Pull Request detalhando suas alterações.

---
