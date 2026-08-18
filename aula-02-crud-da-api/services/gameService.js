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

  // Método para cadastrar jogos
  async Create(title, year, platform, price) {
    try {
      // Enviando os dados a sere cadastrados para o Model
      const newGame = new Game({
        // title: title,
        // year: year,
        // platform: platform,
        // price: price
        title,
        year,
        platform,
        price,
      });
      // Aguardar a operação de cadastro
      await newGame.save(); // .save() -> É o método de mongoose para cadastrar
    } catch (error) {
      console.log(error);
    }
  }
}

// Exportando a classe
export default new gameService();
