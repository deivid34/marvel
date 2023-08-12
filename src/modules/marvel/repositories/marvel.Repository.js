const fetch = require('node-fetch');
const AppError = require('../../../shared/AppError');
const connection = require('../../../shared/database/connection');

module.exports = {
  async GetMarvelCharacters(apiKey) {
    const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
    const limit = 10;
    const offset = 0;

    try {
      const response = await fetch(`${apiUrl}?apikey=${apiKey}&limit=${limit}&offset=${offset}`);
      const data = await response.json();

      if (data.code === 200) {
        const characters = data.data.results.map((character) => ({
          id: character.id,
          name: character.name,
          description: character.description,
        }));

        return characters;
      } else {
        throw new AppError('Não foi possível obter a lista de personagens da Marvel.');
      }
    } catch (error) {
      throw new AppError('Erro ao buscar personagens da Marvel.');
    }
  },
};


