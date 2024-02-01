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

#### 📂mocks
> Armazena os dados e mocks utilizados nos testes unitários.
#### 📂tests
> Armazena as switch de testes de integração.

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