const fetch = require('node-fetch');

class MarvelProvider {
  constructor() {
    this.apiKey = process.env.MARVEL_ID;
    this.apiUrl = 'https://gateway.marvel.com/v1/public';
  }

  async getMarvelCharacters() {
    const limit = 10;
    const offset = 0;

    const response = await fetch(`${this.apiUrl}/characters?apikey=${this.apiKey}&limit=${limit}&offset=${offset}`);
    const data = await response.json();

    if (data.code === 200) {
      const characters = data.data.results.map((character) => ({
        id: character.id,
        name: character.name,
        description: character.description,
      }));
      return characters;
    } else {
      throw new Error('Erro ao buscar personagens da Marvel.');
    }
  }
}

module.exports = MarvelProvider;
