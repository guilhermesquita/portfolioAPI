# labeddit API
Projeto incentivado pela instituição de tecnologia Labenu para o desenvolvimento full-stac de uma rede social baseado no Reddit

STACKS: Node.js (typescript), Express, Knex, SQLite

## ANOTAÇÕES IMPORTANTES
 ### Types and interfaces

 ```ts
 export interface TokenPayload {
    id: string,
    name: string,
}
 ```

```ts
export interface TokenDecode{
    id: string,
    name: string,
    iat: number,
    exp: number
}
 ```

 ### Code configuration IDgenerator
  ```ts
 import { v4 } from 'uuid'

 export class IdGenerator {
    public generate = (): string => {
        return v4()
    }
 }
 ```
 ### Code Configuration Token Generator

 ```ts
export class TokenManager {
    public createToken = (payload: TokenPayload): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        return token
    }}
 ```
### Code Configuration Token Generator

```ts
public getPayload = (token: string): TokenPayload | null => {
        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY as string
            )

            return payload as TokenPayload
        } catch (error) {
            return null
        }
    }
```

## Arquitetura

#### 📂Controllers
> Aplica validações necessárias na requisição.
#### 📂Business
> Aplica regras de negócios antes de enviar a controller.
#### 📂Database
> Cria as conexões necessárias com o banco de dados.
#### 📂Services
> Aplica configurações básicas para token e id.
#### 📂dtos
> Desenvolve padrão para o transporte de dados entre diferentes componentes.
#### 📂Entity
> Gerencia a estrutura das entidades da aplicação.
#### 📂Routes
> Gerencia a estrutura das rotas dos endpoints.
#### 📂Errors
> Cria as classes necessárias para disparar erros nas requisições.

## Execução de migrations
- Criar o arquivo knexfile.js
```ts
module.exports = {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || 'username',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'databasename',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
  };
```
- Adicione os seguintes scripts ao seu arquivo package.json:
```json
"scripts": {
  "migrate": "knex migrate:latest",
  "rollback": "knex migrate:rollback",
  "seed": "knex seed:run" //se possuir seeds
}
```

- Crie uma nova migration usando o seguinte comando: 
```bash
npx knex migrate:make nome_da_migration
```

- Será criado um arquivo que terá um nome como 20220131235959_nome_da_migration.js. Defina as operações neste arquivo:
```ts
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('nomedatabela', (table) => {
      table.string('id').primary().notNullable().unique();
      table.string('name').notNullable();
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
```

- Execute as migrations usando o seguinte comando: 
```bash
npx knex migrate:latest
```

- Se precisar reverter as últimas migrations, use o seguinte comando:
```bash
npx knex migrate:rollback
```

- Se você tiver arquivos de seed, que são usados para inserir dados iniciais no banco de dados, você pode executá-los usando o seguinte comando:
```bash
npx knex seed:run
```
---

## Criação de seeds
- Use o seguinte comando para criar um arquivo de seed:
```bash
npx knex seed:make nome_da_seed
```
- O arquivo terá um nome semelhante a 20220131235959_nome_da_seed.js. utilize o objeto 'knex' para inserir dados no banco de dados. Aqui está um exemplo:
```js
// src/database/seeds/20220131235959_nome_da_seed.js
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tabela_exemplo').del()
    .then(function () {
      // Inserts seed entries
      return knex('tabela_exemplo').insert([
        { id: 1, coluna1: 'valor1' },
        { id: 2, coluna1: 'valor2' },
        // Adicione mais dados conforme necessário
      ]);
    });
};
```
- execute: 
```bash
npx knex seed:run
```

- adicione isso no knexfile.js:
```js
seeds: {
    directory: './src/database/seeds', // Diretório onde os arquivos de seeds estão localizados
  },
```

## Endpoints Básicos
### endpoints

**_POST_** /v2/projects

Cadastra um novo projeto

    body {
        nome: 'nome do projeto',
        github: 'Nome do usuário',
        link: 'Senha do usuário'
    }
---
**_POST_** /v2/formations

Cadastra uma nova formação

    body {
        formacao: 'conteúdo da postagem',
        status: 'em andamento',
        ano: 2022
    }
---

**_POST_** /v2/experiencies

Cadastra uma nova experiencia

    body {
        empresa: 'conteúdo da postagem',
        inicio: 2023,
        fim: 2024,
        function: Desenvolvedor
    }
---

**_GET_** /v2/projects

Listagem de todos os projetos

**_GET_** /v2/formations

Listagem de todas as formações

**_GET_** /v2/experiencies

Listagem de todas as experiências