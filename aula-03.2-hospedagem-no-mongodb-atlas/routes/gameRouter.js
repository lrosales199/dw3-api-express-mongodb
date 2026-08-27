// Endpoints (rotas) de Games
import express from "express";

const gameRoutes = express.Router();

// Importando o controller
import gameController from "../controllers/gameController.js";

// Endpoint (rota) para LISTAR todos os jogos
gameRoutes.get("/games", gameController.getAllGames);

// Endpoint (rota) para LISTAR um jogo único
gameRoutes.get("/games/:id", gameController.getOneGame);

// Endpoint (rota) para CADASTRAR um jogo
gameRoutes.post("/games", gameController.createGame);

// Endpoint (rota) para DELETAR um jogo
gameRoutes.delete("/games/:id", gameController.deleteGame);

// Endpoint (rota) para ALTERAR um jogo
gameRoutes.put("/games/:id", gameController.updateGame);

export default gameRoutes;
