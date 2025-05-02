# 📖 Gerenciador de Projetos

## 📌 Sobre o Projeto
O **Gerenciador de Projetos** é um sistema de gerenciamento de projetos desenvolvido com **React**, utilizando **Styled Components** para um design moderno e responsivo. Ele permite que usuários criem, editem e gerenciem projetos, adicionando serviços dentro de um orçamento.

## 📸 Capturas de Tela

### 🖥️ Versão Desktop
![Project Desktop](src/assets/img/project_final_desktop.png)

### 📱 Versão Mobile
![Project Mobile](src/assets/img/project_final_mobile.png)


## [Vizualize o projeto clicando aqui](https://yudiyamada.github.io/gerenciador-de-projetos/)

## 🚀 Tecnologias Utilizadas
### Frontend:
- **React** (v19.0.0) - Biblioteca para construção da interface interativa
- **React Router Dom** (v7.4.1) - Gerenciamento de rotas e navegação
- **Styled Components** (v6.1.17) - Estilização baseada em componentes
- **UUID** (v11.1.0) - Geração de identificadores únicos

### Backend:
- **Json-Server** (v1.0.0-beta.3) - Simulação de API REST para armazenamento de dados

### Ferramentas de Build:
- **Vite** (v6.2.0) - Ferramenta moderna de desenvolvimento e empacotamento

---

## 📂 Estrutura do Projeto
```plaintext
a-base-do-react/
│── public/
│── src/
│   ├── api/              # Funções para interação com a API fake (JSON Server)
│   ├── assets/           # Imagens e outros arquivos estáticos
│   ├── components/       # Componentes reutilizáveis
│   ├── hooks/            # Hooks personalizados para gerenciar estado e lógica
│   ├── Layout/           # Componente de layout geral da aplicação
│   ├── pages/            # Páginas principais do aplicativo
│   ├── routes/           # Configuração das rotas da aplicação
│   ├── styles/           # Estilos globais e temas personalizados
│   ├── App.jsx           # Componente principal da aplicação
│   ├── main.jsx          # Ponto de entrada da aplicação
│── .gitignore            # Arquivos ignorados pelo Git
│── db.json               # Banco de dados simulado (JSON Server)
│── eslint.config.js      # Configuração do ESLint
│── index.html            # Estrutura HTML do projeto
│── package.json          # Dependências e scripts
│── package-lock.json     # Controle de versão das dependências
│── README.md             # Documentação do projeto
│── vite.config.js        # Configuração do Vite
```

---

## ⚙️ Instalação e Execução

### 1️⃣ Clone o Repositório
```bash
git clone https://github.com/YudiYamada/gerenciador-de-projetos.git
cd gerenciador-de-projetos
```

### 2️⃣ Instale as Dependências
```bash
npm install
```

### 3️⃣ Inicie o Servidor Backend (JSON Server)
```bash
npm run backend
```

### 4️⃣ Inicie a Aplicação em Modo Desenvolvimento
```bash
npm run dev
```

---

## 🛠️ Funcionalidades Principais
✅ **Gerenciamento de Projetos:** Criar, editar e excluir projetos com orçamento definido  
✅ **Adição de Serviços:** Associar serviços aos projetos  
✅ **Feedback Visual:** Mensagens dinâmicas de sucesso e erro  
✅ **Design Responsivo:** Interface moderna com Styled Components  
✅ **Simulação de Backend:** Armazenamento de dados no JSON Server  

---

## 🎨 Estilos e Tema
O projeto utiliza **Styled Components**, e todas as configurações de cores estão organizadas no arquivo `theme.jsx`. Além disso, os estilos globais são gerenciados pelo `GlobalStyles.jsx`.

---

## 📌 Estrutura de Rotas
A aplicação usa `React Router Dom` para navegação eficiente, com as seguintes rotas:
- `/` → Página inicial
- `/contato` → Contato
- `/empresa` → Sobre a empresa
- `/projetos` → Lista de projetos cadastrados
- `/novoprojeto` → Criar um novo projeto
- `/projeto/:id` → Detalhes de um projeto específico

---

## 📄 Licença
Este projeto é de código aberto e pode ser usado conforme desejado.