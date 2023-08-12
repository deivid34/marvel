


// Importe as dependências necessárias
const marvelRepository = require('./caminho/para/marvelRepository');

class MarvelCharactersService {
  constructor(marvelRepository) {
    this.marvelRepository = marvelRepository;
  }

  async getMarvelCharacters(apiKey) {
    try {
      // Chame o serviço do repositório para obter a lista de personagens da Marvel
      const characters = await this.marvelRepository.getMarvelCharacters(apiKey);

      // Aqui, você pode adicionar lógica adicional, se necessário, antes de retornar os personagens
      return characters;
    } catch (error) {
      throw new Error('Erro ao buscar personagens da Marvel.');
    }
  }
}

// Exporte o serviço
module.exports = new MarvelCharactersService(marvelRepository);
