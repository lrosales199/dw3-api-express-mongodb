// Serviços de Games
// Aqui será inserido os métodos para Ler, Cadastrar, Alterar e Excluir games

// Importando o Model
import Game from "../models/Games.js";

class gameService {
  // Serviço para ler os jogos
  async getAll() {
    // Tentativa da promessa (sucesso)
    try {
      // O metodo .find() -> Buscar Registros
      const games = await Game.find();
      return games;
    // Caso ocorra um erro será executado o catch
    } catch (error) {
      console.log(error);
    }
  }
}

// Exportando a classe
export default new gameService();
