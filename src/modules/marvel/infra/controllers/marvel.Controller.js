
const fetch = require('node-fetch');
const MarvelProvider = require('../../../../providers/MarvelProvider'); // Substitua pelo provider real da Marvel
const CreateMarvelCharacterService = require('../../services/CreateMarvelCharacterService');
const UpdateMarvel = require('../../services/UpdateMarvel');
const DeleteMarvelCharacterService = require('../../services/DeleteMarvelCharacterService');

const MarvelProvider = new MarvelProvider()

async function getMarvelCharacters(req, res) {
  const marvelPublicKey = process.env.MARVEL_ID;
  const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
  const limit = 10;
  const offset = 0;

  try {
    const response = await fetch(`${apiUrl}?apikey=${marvelPublicKey}&limit=${limit}&offset=${offset}`);
    const data = await response.json();

    if (data.code === 200) {
      const characters = data.data.results.map((character) => ({
        id: character.id,
        name: character.name,
        description: character.description,
      }));

      return res.json({ characters });
    } else {
      throw new Error('Não foi possível obter a lista de personagens.');
    }
  } catch (error) {
    console.error('Erro ao buscar personagens:', error.message);
    return res.status(500).json({ error: 'Erro ao buscar personagens.' });
  }
}

async function createMarvelCharacterService(req, res) {
  try {
    const { name, description, thumbnail } = req.body;
    const createCharacterService = new CreateMarvelCharacterService(); // Substitua pelo serviço real de criação
    const character = await createCharacterService.execute({ name, description, thumbnail });
    
    return res.json({ character });
  } catch (error) {
    console.error('Erro ao criar personagem:', error.message);
    return res.status(500).json({ error: 'Erro ao criar personagem.' });
  }
}

async function updateMarvel(req, res) {
  try {
    const { characterId } = req.params;
    const { name, description, thumbnail } = req.body;
    const updateService = new UpdateMarvel(); // Substitua pelo serviço real de atualização
    const character = await updateService.execute({ characterId, name, description, thumbnail });
    
    return res.json({ character });
  } catch (error) {
    console.error('Erro ao atualizar personagem:', error.message);
    return res.status(500).json({ error: 'Erro ao atualizar personagem.' });
  }
}

async function deleteMarvelCharacterService(req, res) {
  try {
    const { characterId } = req.params;
    const deleteService = new DeleteMarvelCharacterService(); // Substitua pelo serviço real de exclusão
    await deleteService.execute({ characterId });
    
    return res.json({ message: 'Personagem excluído.' });
  } catch (error) {
    console.error('Erro ao excluir personagem:', error.message);
    return res.status(500).json({ error: 'Erro ao excluir personagem.' });
  }
}

module.exports = {
  getMarvelCharacters,
  createMarvelCharacterService,
  updateMarvel,
  deleteMarvelCharacterService,
};
