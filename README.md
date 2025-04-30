# Gerenciador de Projetos

## 📌 Sobre o Projeto
Este é um aplicativo de gerenciamento de projetos desenvolvido com **React** e **Styled Components**, permitindo que usuários criem, editem e gerenciem projetos e serviços dentro de um orçamento.

## 🚀 Tecnologias Utilizadas
- **React** (v19.0.0)
- **React Router Dom** (v7.4.1)
- **Styled Components** (v6.1.17)
- **UUID** (v11.1.0)
- **Json-Server** para simular um backend (v1.0.0-beta.3)
- **Vite** para build e preview (v6.2.0)

## [Vizualize o projeto clicando aqui](https://yudiyamada.github.io/gerenciador-de-projetos/)

## ⚙️ Instalação e Configuração
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/YudiYamada/gerenciador-de-projetos.git
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor JSON**:
   ```bash
   npm run backend
   ```

4. **Execute o projeto em modo desenvolvimento**:
   ```bash
   npm run dev
   ```

## 📌 Funcionalidades
- Criar e editar projetos dentro de um orçamento definido
- Adicionar serviços a projetos
- Visualizar e remover serviços existentes
- Feedback com mensagens dinâmicas
- Design responsivo e moderno

## 🛠️ Estilos Globais
O projeto utiliza **Styled Components** para gerenciar os estilos, facilitando a manutenção e criação de componentes estilizados. As configurações de cores estão centralizadas no arquivo `theme.jsx`.

## 🏗️ Estrutura de Rotas
As rotas são gerenciadas pelo `React Router Dom` e estão definidas no arquivo `AppRoutes.jsx`, garantindo uma navegação fluida entre as páginas.