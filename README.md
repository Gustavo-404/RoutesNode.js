# RoutesNode.js
Criação de API utilizando node.js

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

## Regras

- Cadastro de usuário

  - [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  - [x] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  - [x] Não é permitido cadastrar tag sem nome

  - [x] Não é permitido cadastrar mais de uma tag com o mesmo nome

  - [x] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  - [ ] Não é permitido um usuário cadastrar um elogio para si

  - [ ] Não é permitido cadastrar elogios para usuários inválidos

  - [ ] O usuário precisa estar autenticado na aplicação
 
 ### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina a seguinte ferramenta:
[Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <>

# Acesse a pasta do projeto no terminal/cmd
$ cd 

# Vá para a pasta server
$ cd 

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

## Endpoints para acesso das rotas criadas
* ```http://localhost:3000/usersPost``` para cadastrar um novo usuario<br /> 
estrutura do Json<br /> 
{<br />
	"name": "",<br />
	"email": "",<br />
	"password": "",<br />
	"admin": false<br />
}<br />

* ```http://localhost:3000/tagsPost``` para cadastrar uma nova Tag<br />
estrutura do Json<br />
{<br />
	"name": ""<br />
}<br />
* ```http://localhost:3000/authenticate``` para validar um login com JWT <br />
estutura do Json<br /> 
{<br />
	"email": "",<br />
	"password": ""<br />
}




