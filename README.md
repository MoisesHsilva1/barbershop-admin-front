

<!DOCTYPE html>

<html lang="pt-BR">

<head>

  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Cursor AI Workspace Guide</title>

  <style>

    body {

      font-family: Arial, sans-serif;

      background: #f8f9fb;

      color: #1f2937;

      line-height: 1.7;

      max-width: 1100px;

      margin: 0 auto;

      padding: 40px;

    }

    h1, h2, h3 {

      color: #111827;

    }

    h1 {

      font-size: 42px;

      border-bottom: 4px solid #f4b400;

      padding-bottom: 10px;

    }

    h2 {

      margin-top: 48px;

      border-left: 6px solid #f4b400;

      padding-left: 12px;

    }

    h3 {

      margin-top: 32px;

    }

    code {

      background: #eef1f5;

      padding: 2px 6px;

      border-radius: 6px;

      font-size: 14px;

    }

    pre {

      background: #111827;

      color: #f9fafb;

      padding: 18px;

      border-radius: 12px;

      overflow-x: auto;

    }

    .card {

      background: white;

      border: 1px solid #e5e7eb;

      border-radius: 16px;

      padding: 24px;

      margin-top: 24px;

    }

    ul li {

      margin-bottom: 10px;

    }

    .highlight {

      background: #fff7db;

      padding: 12px;

      border-radius: 10px;

      border-left: 4px solid #f4b400;

    }

    table {

      width: 100%;

      border-collapse: collapse;

      margin-top: 16px;

    }

    th, td {

      border: 1px solid #d1d5db;

      padding: 12px;

      text-align: left;

    }

    th {

      background: #f3f4f6;

    }

  </style>

</head>

<body>

<h1>Cursor AI Workspace Guide</h1>

<p>

Documentação completa para estruturar um workspace profissional no Cursor utilizando:

<strong>Rules</strong>, <strong>Skills</strong>, <strong>Commands</strong> e templates de Feature Request.

Porque escrever o mesmo prompt gigante cinquenta vezes por semana é um ritual curioso da engenharia moderna.

</p>

<div class="card">

  <h2>Objetivo</h2>

  <ul>

    <li>Padronizar arquitetura</li>

    <li>Reduzir prompts repetitivos</li>

    <li>Melhorar consistência do código</li>

    <li>Aumentar produtividade</li>

    <li>Evitar decisões aleatórias da IA</li>

    <li>Escalar desenvolvimento de features</li>

  </ul>

</div>

<h2>Estrutura Recomendada</h2>

<pre><code>.cursor/

├── rules/

│   ├── project-rules.mdc

│   ├── frontend-rules.mdc

│   ├── backend-rules.mdc

│   ├── testing-rules.mdc

│   ├── design-rules.mdc

│   ├── architecture-rules.mdc

│   ├── state-rules.mdc

│   └── security-rules.mdc

│

├── skills/

│   ├── [create-feature.md](http://create-feature.md)

│   ├── [create-component.md](http://create-component.md)

│   ├── [create-schema.md](http://create-schema.md)

│   ├── [create-service.md](http://create-service.md)

│   ├── [review-code.md](http://review-code.md)

│   ├── [debug.md](http://debug.md)

│   └── [adjust-design.md](http://adjust-design.md)

│

├── commands/

│   ├── [feature.md](http://feature.md)

│   ├── [schema.md](http://schema.md)

│   ├── [service.md](http://service.md)

│   ├── [review.md](http://review.md)

│   ├── [optimize.md](http://optimize.md)

│   └── [debug.md](http://debug.md)

│

└── README.html</code></pre>

<h2>Conceitos Fundamentais</h2>

<div class="card">

  <h3>Rules</h3>

  <p>

  Rules definem como o projeto funciona.

  </p>

  <ul>

    <li>Arquitetura</li>

    <li>Estrutura de pastas</li>

    <li>Stack</li>

    <li>Padrões</li>

    <li>Convenções</li>

    <li>Design System</li>

    <li>Naming</li>

  </ul>

  <div class="highlight">

    Rules respondem:

    <strong>"Como esse projeto funciona?"</strong>

  </div>

</div>

<div class="card">

  <h3>Skills</h3>

  <p>

  Skills funcionam como especialistas.

  </p>

  <ul>

    <li>Criação de feature</li>

    <li>Criação de schema</li>

    <li>Review de código</li>

    <li>Refatoração</li>

    <li>Ajuste de design</li>

  </ul>

  <div class="highlight">

    Skills respondem:

    <strong>"Como essa tarefa deve ser executada?"</strong>

  </div>

</div>

<div class="card">

  <h3>Commands</h3>

  <p>

  Commands são atalhos rápidos.

  </p>

  <pre><code>/feature

/schema

/review

/refactor

/debug</code></pre>

  <div class="highlight">

    Commands respondem:

    <strong>"Execute isso rapidamente."</strong>

  </div>

</div>

<h2>Fluxo Completo</h2>

<pre><code>Feature Request

        ↓

Rules carregam arquitetura

        ↓

Skills carregam especialização

        ↓

Commands aceleram execução

        ↓

Cursor gera implementação</code></pre>

<h2>Como Usar Rules</h2>

<p>

Rules são aplicadas automaticamente.

</p>

<p>

Você NÃO precisa escrever:

</p>

<pre><code>❌ Use React Hook Form

❌ Use Zod

❌ Use TanStack Query

❌ Use Atomic Design

❌ Use services

❌ Use hooks</code></pre>

<p>

Porque isso já está definido nas Rules.

</p>

<div class="highlight">

O prompt da feature deve explicar apenas:

<strong>o que construir</strong>.

</div>

<h2>Como Usar Skills</h2>

<p>

Skills normalmente são ativadas automaticamente pelo contexto.

</p>

<h3>Exemplo</h3>

<pre><code>Create validation for user form</code></pre>

<p>

O Cursor identifica:

</p>

<ul>

  <li>schema</li>

  <li>validation</li>

  <li>forms</li>

</ul>

<p>

Então tende a usar:

</p>

<pre><code>[create-schema.md](http://create-schema.md)</code></pre>

<h3>Forçando uso de uma Skill</h3>

<pre><code>Use adjust-design skill and improve this page</code></pre>

<h2>Como Usar Commands</h2>

<table>

  <tr>

    <th>Command</th>

    <th>Objetivo</th>

  </tr>

  <tr>

    <td><code>/feature</code></td>

    <td>Criar feature completa</td>

  </tr>

  <tr>

    <td><code>/schema</code></td>

    <td>Criar schema Zod</td>

  </tr>

  <tr>

    <td><code>/service</code></td>

    <td>Criar camada de serviço</td>

  </tr>

  <tr>

    <td><code>/review</code></td>

    <td>Revisar implementação</td>

  </tr>

  <tr>

    <td><code>/optimize</code></td>

    <td>Otimizar performance</td>

  </tr>

  <tr>

    <td><code>/debug</code></td>

    <td>Investigar problema</td>

  </tr>

</table>

<h2>Estrutura do Projeto</h2>

<pre><code>src/

├── components/

│   ├── atoms/

│   ├── molecules/

│   ├── organisms/

│   ├── templates/

│   └── pages/

│

├── api/

│   └── api.ts

│

├── hooks/

├── services/

├── stores/

├── routes/

├── schema/

├── config/

│   └── env.ts

│

├── types/

├── utils/

├── lib/

└── assets/</code></pre>

<h2>Environment Pattern</h2>

<p>Evite:</p>

<pre><code>import.meta.env.VITE_API_URL</code></pre>

<p>Use:</p>

<pre><code>const Environment = {

  VITE_API_URL:

  import.meta.env.VITE_API_URL

};

export default Environment;</code></pre>

<h2>API Pattern</h2>

<pre><code>import axios from 'axios';

import Environment from '@/config/env';

export const api = axios.create({

  baseURL: Environment.VITE_API_URL,

  headers: {

    'Content-Type': 'application/json'

  }

});</code></pre>

<h2>Schema Pattern</h2>

<pre><code>schema/

├── shared/

│   ├── email-schema.ts

│   └── phone-schema.ts

│

└── forms/

    ├── login-form-schema.ts

    └── profile-form-schema.ts</code></pre>

<div class="highlight">

Shared = reutilizável

Forms = schema específico de formulário

</div>

<h2>Select Options Pattern</h2>

<p>Evite listas inline:</p>

<pre><code>&lt;Select

  options={[

    {

      label:'Admin',

      value:'admin'

    }

  ]}

/&gt;</code></pre>

<p>Use:</p>

<pre><code>export const ROLE_OPTIONS = [

  {

    label:'Admin',

    value:'admin'

  }

] as const;

export function getRoleOptions(){

  return ROLE_OPTIONS;

}</code></pre>

<h2>Template de Feature Request</h2>

<pre><code># Feature Request

## Goal

Implement feature:

[feature objective]

---

## Business Context

[problem being solved]

---

## Functional Requirements

- requirement

- requirement

- requirement

---

## UI Requirements

- responsive

- accessibility

- mobile first

---

## Data Requirements

Request:

interface ExampleRequest{}

Response:

interface ExampleResponse{}

API:

GET /resource

---

## Validation Rules

- validation

- validation

---

## Edge Cases

- network failure

- loading state

- invalid data

---

## Expected Deliverables

- schemas

- hooks

- services

- components

- tests</code></pre>

<h2>Exemplo Real</h2>

<pre><code>/feature

# Goal

Implement service management

# Functional Requirements

- create service

- edit service

- delete service

- list services

# API

GET /services

POST /services

PUT /services/:id

DELETE /services/:id</code></pre>

<h2>Design System</h2>

<h3>Paleta</h3>

<pre><code>Primary:

#F4B400

Neutral:

#111827

#1F2937

#F9FAFB</code></pre>

<h3>Tipografia</h3>

<pre><code>Inter Tight

Inter</code></pre>

<h3>Princípios</h3>

<ul>

  <li>Minimalista</li>

  <li>Muito espaço em branco</li>

  <li>Contraste suave</li>

  <li>Hierarquia clara</li>

  <li>Poucos acentos de cor</li>

</ul>

<h2>Mental Model Final</h2>

<pre><code>Prompt

↓

O que construir

↓

Rules

↓

Como o projeto funciona

↓

Skills

↓

Como executar tarefas

↓

Commands

↓

Atalhos

↓

Implementação consistente</code></pre>

<div class="highlight">

Quanto melhor a separação entre Rules, Skills, Commands e Prompt,

mais previsível e consistente o Cursor fica.

Sem isso, a IA começa a improvisar arquitetura.

E improvisação arquitetural costuma terminar com três pastas diferentes chamadas "utils". Fenômeno quase folclórico.

</div>

</body>

</html>