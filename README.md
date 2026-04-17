# 🪙 Protheus Cambio

Uma plataforma moderna e segura para operações de câmbio, desenhada com foco em alta performance, validação rigorosa de dados e arquitetura escalável.

## 🚀 Tecnologias Utilizadas

O projeto é dividido em duas frentes, utilizando o que há de mais moderno no ecossistema JavaScript/TypeScript:

**Frontend**
* [Next.js 16](https://nextjs.org/) - Framework React.
* [SASS](https://sass-lang.com/) & Material Design 3 - Estilização e UI.

**Backend**
* [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/) - Servidor API REST.
* [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para maior segurança.
* [Prisma ORM](https://www.prisma.io/) - Modelagem e comunicação com o banco de dados.
* [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional.
* [Zod](https://zod.dev/) - Validação de schemas e payloads da API.
* [Docker](https://www.docker.com/) - Containerização da infraestrutura de dados.
* [Jest](https://jestjs.io/) - Testes automatizados.

## 🏗️ Arquitetura do Backend

O backend foi construído seguindo o padrão de **Arquitetura em Camadas (Layered Architecture)**, garantindo a separação de responsabilidades:
1.  **Routes:** Definição de endpoints.
2.  **Middlewares & Zod:** Interceptação de requisições e validação de entrada de dados.
3.  **Controllers:** Orquestração de requisições (Req/Res).
4.  **Services:** Regras de negócio puras e isoladas.
5.  **Prisma/DB:** Persistência de dados no PostgreSQL.

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (v18 ou superior)
* [Docker Desktop](https://www.docker.com/products/docker-desktop)
* [Git](https://git-scm.com/)

## 🛠️ Como rodar o projeto localmente

**1. Clone o repositório**
```bash
git clone [https://github.com/ElieldsonKervem/protheus-cambio-project.git](https://github.com/ElieldsonKervem/protheus-cambio-project.git)
cd protheus-cambio-project
