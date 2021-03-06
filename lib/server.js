"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
/**
 * METODOS:
 * GET -> BUSCA
 * POST -> SALVAR
 * PUT -> ALTERAR
 * DELETE -> DELETAR
 * PATCH -> ALTERACAO ESPECIFICA
 */
app.get("/users", function (request, response) {
    return response.send("Hello World!");
});
app.listen(3333, function () { return console.log("Server is running"); });
