const crypto = require('crypto');

function createMarvelHash(publicKey, privateKey, timestamp) {
  const hash = crypto.createHash('md5').update(`${timestamp}${privateKey}${publicKey}`).digest('hex');
  return hash;
}
const publicKey = '1815f67d2c36cce7e6d0fd5a28f53fb9';
const privateKey = 'e604082a611739fd50a2889a31038c6a3814b84e';

// Obtém o timestamp atual em milissegundos
const timestamp = new Date().getTime();

// Cria o hash de autenticação
const hash = createMarvelHash(publicKey, privateKey, timestamp);

// Constrói a URL com o hash e o timestamp
const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

// Faz a chamada à API da Marvel
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log('Resposta da API:', data);
  })
  .catch(error => {
    console.error('Erro ao buscar personagens:', error.message);
  });