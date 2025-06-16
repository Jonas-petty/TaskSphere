# TaskSphere 

TaskSphere é uma aplicação web de gerenciamento de tarefas com foco em **colaboração e organização visual**, construída em **React** com suporte a **drag and drop** via **DnD Kit**, e persistência de dados com **json-server**.

---

## 🚀 Funcionalidades

- ✅ Login e cadastro de usuários
- ✅ Criação e edição de projetos
- ✅ Adição de tarefas por projeto
- ✅ Interface de _drag & drop_ com 3 colunas: **Todo**, **In Progress**, **Done**
- ✅ Atualização de status das tarefas com persistência via API fake (`json-server`)
- ✅ Visual moderno com Atomic Design

---

## 🛠️ Tecnologias utilizadas

- [React](https://reactjs.org/) + Vite
- [DnD Kit](https://dndkit.com/) — drag and drop moderno e acessível
- [json-server](https://github.com/typicode/json-server) — mock backend RESTful
- [React Router DOM](https://reactrouter.com/) — controle de rotas
- [uuid](https://www.npmjs.com/package/uuid) — geração de IDs únicos
- CSS puro
- Atomic Design (estruturação de componentes em `atoms`, `molecules`, `organisms`)

---

## 📂 Estrutura do Projeto (resumida)

```
src/
├── assets/
├── atoms/
├── molecules/
├── organisms/
├── pages/
├── routes/
├── services/
├── utils/
├── App.jsx
├── main.jsx
public/
db.json
```

---

## 📦 Requisitos

- Node.js >= 16
- npm ou yarn

---

## ▶️ Como rodar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/Jonas-petty/TaskSphere.git
cd TaskSphere
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Inicie o json-server:**

```bash
npx json-server --watch db.json --port 3000
```

4. **Rode a aplicação:**

```bash
npm run dev
# ou
yarn dev
```
Acesse em: http://localhost:5173

## 📁 Banco de dados (db.json)

O db.json simula um backend RESTful com os seguintes recursos:

 - `/users`

 - `/projects`

- `/tasks`

Você pode testar requisições com ferramentas como Postman ou Insomnia.

## ✍️ Autor

O db.json simula um backend RESTful com os seguintes recursos:

Desenvolvido por [Jonas Felix](https://github.com/Jonas-petty) 🚀
Se curtir, ⭐ o repositório e contribua com sugestões ou issues!



