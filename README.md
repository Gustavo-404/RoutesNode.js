# RoutesNode.js
Criação das rotas GET &amp; POST utilizando node.js

## Comandos utilizados para criação do projeto:
* yarn init -y (-y porque Cria o projeto com as informações padrões)

* yarn add (instala dependecias)

* yarn add typescript -D (-D porque a dependencia irá ser usada somente p/ desenvolvimento )

* yarn tsc --init (inicializa o typescript)

* yarn tsc (converte o ts para JavaScript)

* yarn add express (adciona o express para executar as rotas)

* npm install express --save (intala o express para criar as rotas e recursos)

* yarn add @types/express -D (adciona as bibliotecas necessarias restantes)

* yarn add ts-nove-dev -D (dependencia de desenvolvimento que converte ts em js)

* "scripts": {
        "dev": "ts-node-dev src/server.ts"
    }, (adicionar esse script em package.json informando qual a clase o node-dev converte altomaticamente para js)


* app.get("/test", (request, response) => {     //CRIA UMA ROTA GET /TEST
    // REQUEST => ENTRANDO
    // RESPONSE => SAINDO
    return response.send("OLÁ, MUNDO!")
})


* app.post("/test-post", (request, response) => {     //CRIA UMA ROTA POST /TEST-POST
    // REQUEST => ENTRANDO
    // RESPONSE => SAINDO
    return response.send("OLÁ, MUNDO!")
})

## Endpoints para acesso das rotas criadas
* ```http://localhost:3000/test``` para o verbo GET
* ```http://localhost:3000/test-post``` para o verbo POST



