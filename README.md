# TMDB Movie Fetcher API

API REST desenvolvida em **Node.js + Express** que consome dados da **API pública do TMDB (The Movie Database)**, armazena informações de filmes em um banco de dados **PostgreSQL** e disponibiliza endpoints para consulta desses dados.

---

## Tecnologias Utilizadas

* Node.js (v18+)
* Express
* PostgreSQL
* Fetch API (nativo do Node)
* dotenv
* Postman (para testes)

---

## Estrutura do Projeto

```
src/
 ├─ config/
 │   └─ db.js
 ├─ services/
 │   └─ tmdbService.js
 ├─ controllers/
 │   └─ movieController.js
 ├─ routes/
 │   └─ movieRoutes.js
 ├─ app.js
 └─ server.js
```

---

## Configuração do Ambiente

### Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd tmdb-movie-fetcher
```

---

### Instalar dependências

```bash
npm install
```

---

### Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```
DATABASE_URL=postgres://usuario:senha@localhost:5432/tmdb_movies
TMDB_KEY=SUA_CHAVE_DA_TMDB
PORT=3000
```

> O arquivo `.env` **não deve ser versionado**.

---

### Criar o banco e a tabela

```sql
CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  release_date VARCHAR(20),
  rating NUMERIC,
  poster_path VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

### Rodar o projeto

```bash
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

## Endpoints Disponíveis


### Buscar filme na TMDB e salvar no banco

```
GET /movies/save/:name
```

Exemplo:

```
GET /movies/save/batman
```

---

### Listar filmes salvos

```
GET /movies
```

Resposta:

```json
[
  {
    "id": 1,
    "title": "Batman Begins",
    "description": "...",
    "release_date": "2005-06-10",
    "rating": 7.7,
    "poster_path": "/path.jpg",
    "created_at": "2025-01-01T12:00:00Z"
  }
]
```

---

## Testes

As rotas podem ser testadas utilizando:

* Postman
* Insomnia
* Navegador (para GET simples)

---


## Autor

Desenvolvido por **Wallis Silva**
