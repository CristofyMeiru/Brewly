# 🍔 **Brewly - Delivery App**

Este projeto é uma **aplicação fullstack** para **gerenciamento de um sistema de delivery**, com controle de **produtos**, **pedidos**, **usuários** e **painel administrativo**. O **backend, desenvolvido em NestJS** com **TypeScript**, implementa **autenticação** e **controle de acesso baseado em roles (RBAC)**, garantindo permissões específicas por tipo de usuário. O **frontend web** oferece uma interface administrativa e **experiência para o cliente final**, com paginação, validação de dados e **estrutura modular**. A aplicação foi projetada com foco em **organização**, **escalabilidade** e **boas práticas arquiteturais**.

## 🛠️ **Tecnologias e ferramentas**

### **Backend (API):**

- **NestJS (Node.js)**: framework do desenvolvimento da REST API
- **TypeScript**: Linguagem principal do backend
- **class-validator / class-transformer**: validação e transformação de dados
- **Swagger (nestjs/swagger)** – documentação da API
- **Fastify**: servidor HTTP
- **Better auth**: orquestração de autenticação e permissões

### **Frontend (Client):**

- **React**: biblioteca principal para construção de interfaces
- **TypeScript**: Linguagem principal do frontend
- **Tanstack Router**: roteamento da aplicação
- **Axios**: consumo de API
- **Tanstack Query**: gerenciamento de estado das requisições
- **Tailwind CSS / CSS Modules / Styled Components**: para estilização
- **Better auth**: orquestração de autenticação com Google OAuth e Email

## 📂 **Estrutura do projeto**

```bash
/client
├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ services/
│  ├─ routes/
│  ├─ shared/
│  └─ lib/
/api
├─ src/
│  ├─ modules/
│  │  └─ product/
│  │     ├─ commands/
│  │        └─ create-product/
│  │            └─ create-product.command.ts
│  │            ├─ create-product.dto.ts
│  │            ├─ create-product.handler.ts
│  │     ├─ queries/
│  │        └─ find-product/
│  │     ├─ product.controller.ts
│  │     └─ product.module.ts
│  ├─ main.ts
│  └─ app.module.ts
```

## ✅ **Funcionalidades**

### **Backend (API):**

- Autenticação com **controle de acesso** baseado em roles **(RBAC)**
- **Controle granular** de permissões (ex.: panel.access, product.create)
- CRUD de produtos com ativação/desativação
- Gerenciamento de pedidos com atualização de status
- **Sistema de fidelidade** (loyalty) com controle de saldo e transações
- **Paginação** e filtros via query params
- **Validação** e transformação automática de dados
- **Documentação da API** via Swagger

### **Frontend (Client):**

- Interface administrativa **protegida por permissões**
- Dashboard com visão geral operacional
- **Gerenciamento de pedidos** com atualização de status
- CRUD de produtos com controle de acesso por role
- **Listagens paginadas** com busca e filtros
- Integração com API utilizando **Axios**
- Controle de rotas com **TanStack Router**
- Gerenciamento de estado de requisições com **TanStack Query**

## 🌐 **Endpoints principais**

```bash
  GET /products?limit=20&page=1       # Lista produtos paginados
  POST /products                      # Cria novo produto
  GET /products/:id                   # Busca produto pelo ID
  PATCH /products/:id                 # Atualiza produto
  DELETE /products/:id                # Remove produto
```

Swagger disponivel em:

```
  http://localhost:{{PORT}}/docs
```

## ⚙️ **Instalação e Execução**

### **Backend (API):**

1. Instale as dependências:

```bash
cd api
npm install
```

2. Configure o `.env` com as variáveis de ambiente contidas em `.env.example`

3. Execute a aplicação:

```
npm run start:dev
```

4. Acesse as rotas atráves da documentação (disponivel apenas em desenvolvimento):

```
http://localhost:{{PORT}}/docs
```

### **Frontend (Client):**

1. Instale dependências:

```bash
cd client
npm install
```

2. Configure o `.env` com as variáveis de ambiente contidas em `.env.example`

3. Execute a aplicação:

```
npm run dev
```

4. Acesse o navegador:

```
http://localhost:{{PORT}}
```

## ✅ **Boas práticas implementadas**

- Validação de entrada e saida de dados no backend
- Transformação automática de query params para tipos corretos
- Paginação segura com limites e valores padrão
- Documentação completa da API com Swagger
- Frontend consumindo API de forma organizada e reativa
- Separação de responsabilidades por camadas e CQRS
