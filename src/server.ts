import express from "express";

const app = express();

/**
 * METODOS:
 * GET -> BUSCA
 * POST -> SALVAR
 * PUT -> ALTERAR
 * DELETE -> DELETAR
 * PATCH -> ALTERACAO ESPECIFICA
 */

 app.get("/users", (request, response) => { //Definindo a rota: vai buscar o http://localhost:3333/users (users: nome da rota)

    return response.json({message: "Hello World"});
 });

 // O primeiro parametro é a roda (Recurso API)
 // O segundo parametro é request e response

 app.post("/", (request, response) => { //recebe dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"})
 })

 app.listen(3333, () => console.log("Server is running"));