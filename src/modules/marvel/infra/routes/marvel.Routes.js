const { Router } = require('express');
const marvelController = require('../controllers/marvelController');
const UpdateMarvelController = require('../controllers/updateMarvelController');
const DeleteMarvelCharacterService = require('../services/DeleteMarvelCharacterService');
const CreateMarvelCharacterService = require('../services/CreateMarvelCharacterService');
const { verifyMarvelAPIKey } = require('../middlewares/marvel.middleware');

const marvelRouter = Router();

marvelRouter.get('/characters', verifyMarvelAPIKey(), marvelController.GetMarvelCharacters);

marvelRouter.put('/characters/:characterId', verifyMarvelAPIKey(), UpdateMarvelController.UpdateMarvelCharacter);

marvelRouter.delete('/characters/:characterId', verifyMarvelAPIKey(), DeleteMarvelCharacterService.DeleteMarvelCharacter);

marvelRouter.post('/characters', verifyMarvelAPIKey(), CreateMarvelCharacterService.CreateMarvelCharacter);

module.exports = marvelRoutes;
