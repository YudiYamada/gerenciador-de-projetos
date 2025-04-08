# Gerenciador de Projetos

Bem-vindo ao **Gerenciador de Projetos**, uma aplicação desenvolvida em **React** com **Styled Components** e **React Router**, que permite criar e gerenciar projetos de forma eficiente.

## [Vizualize o projeto clicando aqui](https://yudiyamada.github.io/gerenciador-de-projetos/)

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- ⚛️ **React** 19
- 🎨 **Styled Components** para estilização
- 🔄 **React Router** para navegação
- 📦 **Json-Server** como backend simulado
- ✅ **ESLint** para padronização de código

## 📂 Estrutura de Diretórios

A estrutura do projeto foi organizada para melhor modularização e escalabilidade:

```
src/
├── api/             # Chamadas de API simuladas
├── assets/          # Arquivos estáticos (imagens, ícones)
├── components/      # Componentes reutilizáveis
│   ├── Container/
│   ├── Footer/
│   ├── Form/
│   ├── Header/
│   ├── LinkButton/
│   ├── Message/
│   ├── NavBar/
│   ├── Projeto/
├── hooks/           # Hooks personalizados
├── layouts/         # Estrutura de layout
│   ├── MainLayout.jsx
│   ├── AdminLayout.jsx (caso tenha um painel administrativo futuramente)
├── pages/           # Páginas principais
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── HomeStyles.jsx
│   ├── Empresa/
│   │   ├── Empresa.jsx
│   │   ├── EmpresaStyles.jsx
│   ├── Contato/
│   │   ├── Contato.jsx
│   │   ├── ContatoStyles.jsx
│   ├── Projetos/
│   │   ├── Projetos.jsx
│   │   ├── ProjetosStyles.jsx
│   ├── NovoProjeto/
│   │   ├── NovoProjeto.jsx
│   │   ├── NovoProjetoStyles.jsx
├── routes/          # Configuração de rotas
│   ├── PublicRoutes.jsx
│   ├── PrivateRoutes.jsx
│   ├── AppRoutes.jsx
├── styles/          # Estilos globais e tema
│   ├── GlobalStyles.jsx
│   ├── theme.jsx
│   ├── mixins.js (se necessário)
└── main.jsx         # Arquivo de entrada
```

## 🎯 Funcionalidades

- Criar novos projetos com nome, orçamento e categoria.
- Armazenamento temporário utilizando **Json-Server**.
- Navegação intuitiva com um menu responsivo.
- Feedback visual ao criar projetos com sucesso.

## 🛠️ Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### 1️⃣ Clone o repositório

```sh
git clone https://github.com/YudiYamada/gerenciador-de-projetos.git
```

### 2️⃣ Instale as dependências

```sh
npm install
```

### 3️⃣ Inicie o servidor JSON

```sh
npm run backend
```

### 4️⃣ Rode o ambiente de desenvolvimento

```sh
npm run dev
```

Agora você pode acessar o projeto em **http://localhost:5173** 🚀

## 💡 Melhorias Futuras

Aqui estão algumas futuras melhorias:

- 💾 Persistência real dos dados com um backend.
- 📊 Dashboard de estatísticas dos projetos criados.
- 🔒 Autenticação de usuários.

## 📜 Licença

Este projeto está licenciado sob a **MIT License**.
