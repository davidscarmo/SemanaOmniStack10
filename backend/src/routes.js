const {Router } = require('express'); // importa somente o método router do express
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router(); // habilita os métodos http do express 

// Métodos HTTP get (buscar alguma informação), post(criar alguma informação), put(alterar alguma informação), delete (deletar) 
//tipos de parâmetros 

//Query Params: método get, request.query(Filtros, ordenação, paginação, ...)
//Route params: put,delete, request.params(Indentificar um recurso na alteração ou remoção)
//body: put, post request.body (Dados para criação ou alteração de um registro)

//MongoDB(não-relacional) //add pelo terminal com yarn add mongoose 

routes.get('/devs', DevController.index); 
routes.post('/devs', DevController.store); // '' contem a rota a ser acessada, () contém a requisição e a resposta para essa requisição

routes.get('/search', SearchController.index); 

module.exports = routes;