import express, { request, response } from "express";

// @type/express
const app = express();

/**
 * GET    => BUSCAR UMA INFORMAÇÃO
 * POST   => INSERIR UMA INFORMAÇÃO
 * PUT    => ALTERAR UMA INFORMAÇÃO
 * DELETE => DELETAR UMA INFROMAÇÃO
 * PATCH  => ALTERAR UMA INFORMAÇÃO ESPECIFICA (SOMENTE SENHA ... etc)
 */

app.get("/test", (request, response) => {
    // REQUEST => ENTRANDO
    // RESPONSE => SAINDO
    return response.send("OLÁ, MUNDO! /GET")
});

app.post("/test-post", (request, response) => {
    return response.send("OLÁ, MUNDO! /POST")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));