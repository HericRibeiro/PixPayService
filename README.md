# PixPayService ⚡

> Geração de pagamentos via PIX com QR Code dinâmico, arquitetura full stack escalável e visual moderno.

---

## ✨ Visão Geral

O **PixPayService** é um sistema completo de pagamentos via **PIX**, focado em performance, escalabilidade e clareza de código.  
Backend em **NestJS + PostgreSQL** e frontend em **React + Vite + TypeScript**.

---

## 🚀 Funcionalidades

- [x] Criação de transações com valor e cliente
- [x] Geração de QR Code (imagem base64 e código copia e cola)
- [x] Filtro dinâmico de transações por qualquer campo
- [x] Integração clean entre frontend e backend
- [x] Estilização moderna com UI responsiva

---

## 🛠 Tecnologias Utilizadas

**Backend:**
- NestJS
- TypeORM
- PostgreSQL (Supabase)
- Dotenv

**Frontend:**
- React
- Vite
- TypeScript

---

## 📂 Estrutura do Projeto

```
  PixPayService/
  ├── backend/
  │   ├── src/
  │   │   ├── transactions.controller.ts
  │   │   ├── transactions.service.ts
  │   │   ├── transactions.entity.ts
  │   │   └── main.ts
  │   └── .env
  └── frontend/
      ├── src/
      │   ├── App.tsx
      │   ├── env.d.ts
      │   └── main.tsx
      └── .env
```

---

## 🧪 Como Rodar Localmente

### 🔧 Backend

```bash
cd backend
npm install
```

Crie um `.env` com:

```env
  PORT=3000
  DB_HOST=aws-0-sa-east-1.pooler.supabase.com
  DB_PORT=6543
  DB_USERNAME=postgres.iemtxjrspymrennqvkxb
  DB_PASSWORD=DesenvolvedorFullStack01.
  DB_DATABASE=postgres
  TRANSACTIONS_BASE_PATH=transactions
```

Rode o backend:

```bash
  npm run start:dev
```

---

### 💻 Frontend

```bash
  cd frontend
  npm install
```

Crie um `.env` com:

```env
  VITE_API_BASE_URL=http://localhost:3000
```

Crie `src/env.d.ts`:

```ts
  interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
```

Rode o frontend:

```bash
  npm run dev
```

---

## 🧠 Diferenciais Técnicos

- Projeto desacoplado e modular
- Tipagem forte com TypeScript
- Variáveis de ambiente organizadas
- Arquitetura limpa e preparada para crescer
- Código comentado e claro

---

## 🎯 Melhorias Futuras

- Autenticação com JWT
- Painel de administração
- Métricas e logs
- Testes unitários e integração
- CI/CD com GitHub Actions

---

## 👨‍💻 Autor

Desenvolvido com foco, clean code e consistência por:

**Heric Ribeiro**  
[github.com/HericRibeiro](https://github.com/HericRibeiro)

---

> _"Código limpo é mais que organização. É uma carta de amor para o próximo dev."_  
> – Heric, 2025