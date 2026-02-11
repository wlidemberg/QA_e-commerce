# QA Store e-commerce Testes Automatizados End-to-End Cypress

## Descrição Objetiva
Projeto de automação de testes end-to-end aplicado a um e-commerce ficticio, com foco na validação de fluxos críticos de negócio, regras funcionais e comportamento do usuário final.

O projeto foi estruturado para simular um ambiente real de produto digital, adotando boas práticas de automação e organização de testes.

---

## Objetivo do Projeto
Demonstrar, na prática, a capacidade de:

- modelar testes a partir de fluxos de negócio
- estruturar um projeto de automação escalável
- validar regras funcionais de um e-commerce
- aplicar organização de código voltada para times de QA

---

## Aplicação utilizada para testes exploratórios

A aplicação base do e-commerce está disponível publicamente para execução de testes exploratórios manuais pelo navegador:

QA Store – aplicação publicada:
https://qa-e-commerce.vercel.app/

Observação importante
Os testes automatizados com Cypress são executados localmente ou em pipeline de CI.
O link do Vercel é destinado exclusivamente para testes manuais exploratórios.

---

## Escopo dos testes automatizados

Os testes cobrem os seguintes módulos e fluxos:

- Autenticação de usuário
- Página inicial e navegação
- Carrinho de compras
- Checkout
- Fluxo completo de compra

---

## Mapeamento dos arquivos de testes

| Arquivo | Responsabilidade |
------|-------------------
| auth.cy.ts | Funcionalidades de autenticação e acesso do usuário |
| home.cy.ts | Validações da página inicial e navegação |
| cart.cy.ts | Operações do carrinho de compras |
| checkout.cy.ts | Processo de finalização de compra |
| flow.cy.ts | Fluxo completo de compra (happy path e integrações entre telas) |

---

## Dados de login para testes

Utilize o usuário abaixo para execução de testes manuais e automatizados:

{
  "name": "Berg Sousa",
  "email": "berg@email.com",
  "password": "123456"
}

---

## User Stories
**Página inicial**

US14 – Visualizar a página inicial e seus principais elementos

US15 – Filtrar produtos por marca

US16 – Filtrar apenas produtos disponíveis

US17 – Visualizar listagem de produtos

US18 – Visualizar nome e preço dos produtos

US19 – Abrir detalhes do produto

US20 – Fechar detalhes do produto

---
**Carrinho**

US10 – Visualizar carrinho vazio sem autenticação

US11 – Adicionar produto ao carrinho

US12 – Exibir confirmação visual ao adicionar produto

US13 – Acessar carrinho a partir do modal
---
**Autenticação**

US01 – Login pela navegação principal

US02 – Redirecionamento para login ao tentar finalizar compra sem autenticação

US03 – Retornar ao carrinho após autenticação durante o checkout
---
**Checkout**

US06 – Acessar checkout

US07 – Visualizar dados do usuário, itens e total

US08 – Confirmar pagamento

US09 – Limpar carrinho após pagamento
---
**Fluxo completo**

US05 – Realizar compra completa com sucesso

---

## Cenários de teste (nível de negócio)
**Página inicial**

Cenário – Exibição dos elementos da página inicial

Cenário – Filtrar produtos por marca

Cenário – Filtrar apenas produtos disponíveis

Cenário – Listagem de produtos

Cenário – Exibir nome e preço

Cenário – Abrir modal de detalhes

Cenário – Fechar modal de detalhes
---
**Carrinho**

Cenário – Visualização do carrinho vazio sem autenticação

Cenário – Adicionar produto ao carrinho

Cenário – Exibir confirmação ao adicionar produto

Cenário – Acesso ao carrinho pelo modal
---
**Autenticação**

Cenário – Login pela navegação principal

Cenário – Redirecionamento ao tentar finalizar compra sem autenticação

Cenário – Retorno ao carrinho após autenticação durante o checkout
---
**Checkout**

Cenário – Acesso ao checkout

Cenário – Exibição das informações no checkout

Cenário – Confirmação de pagamento

Cenário – Limpeza do carrinho após pagamento
---
**Fluxo completo**

Cenário – Realizar compra completa com sucesso

---

## Casos de teste
**home.cy.ts**

CT01 – Exibir elementos da página inicial

CT02 – Filtrar produtos por marca

CT03 – Filtrar apenas produtos disponíveis

CT04 – Listar produtos

CT05 – Exibir nome e preço

CT06 – Abrir modal de detalhes

CT07 – Fechar modal de detalhes
---
**cart.cy.ts**

CT07 – Visualizar carrinho vazio sem autenticação

CT08 – Adicionar produto ao carrinho

CT09 – Exibir modal de confirmação ao adicionar produto

CT11 – Abrir carrinho a partir do modal
---
**auth.cy.ts**

CT15 – Login pela navegação principal com dados válidos

CT16 – Redirecionar para login ao tentar finalizar compra sem estar logado

CT17 – Retornar ao carrinho após login durante tentativa de checkout
---
**checkout.cy.ts**

CT18 – Acessar checkout com usuário logado

CT19 – Exibir dados do usuário, itens, total e formas de 
---
**pagamento**

CT20 – Confirmar pagamento com sucesso

CT21 – Limpar carrinho após pagamento
---
**flow.cy.ts**

CT22 – Realizar compra completa com sucesso

---

## Estratégia de testes

A priorização dos testes foi definida considerando:

- fluxos críticos para conversão do e-commerce

- impacto direto no usuário final

- pontos sensíveis a falhas (login, carrinho, checkout e pagamento)

O projeto utiliza:

- testes funcionais por módulo

- testes de interface para validação de UI essencial

- teste ponta-a-ponta consolidado no arquivo flow.cy.ts

---

## Arquitetura do projeto de testes

O projeto segue as seguintes diretrizes:

- separação de testes por domínio funcional

- uso de fixtures para massa de dados

- centralização de configurações no diretório support

---

## Tecnologias
React.js

tailwind.css

Cypress

TypeScript

Node.js

Git

---

## Pré-requisitos

Node.js 18+

Git

---

## Testes exploratórios manuais

Os cenários descritos neste documento podem ser executados manualmente na aplicação publicada no Vercel, utilizando os mesmos fluxos modelados para os testes automatizados.

---


## Instalação
```bash
npm install
```
## Execução dos Testes

### Modo Intereativo
```bash
npx cypress open
```

### Modo Headless
```bash
npx cypress run
```

---

## Autor

Berg – QA / Test Automation em transição de carreira

