const fetch = require('node-fetch');
const AppError = require('../../../shared/AppError');
const CreateMarvelHash = require('../../../shared/utils/CreateMarvelHash'); //

const publicKey = '1815f67d2c36cce7e6d0fd5a28f53fb9';
const privateKey = 'e604082a611739fd50a2889a31038c6a3814b84e';
const timestamp = new Date().getTime();

const hash = CreateMarvelHash(publicKey, privateKey, timestamp);

class GetMarvelCharacters {
  constructor(marvelRepository) {
    this.marvelRepository = marvelRepository;
  }

  async execute() {
    try {
      const apiKey = this.marvelRepository.apiKey;
      const characters = await this.fetchMarvelCharacters(apiKey);
      return characters;
    } catch (error) {
      throw new AppError('Erro ao buscar personagens da Marvel.');
    }
  }

  async fetchMarvelCharacters(apiKey) {
    try {
      // Suponha que esta URL seja uma API fictícia para buscar personagens
      const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
      const limit = 10;
      const offset = 0;

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
  }
}

module.exports = GetMarvelCharacters;
