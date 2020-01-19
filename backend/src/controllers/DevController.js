const axios = require('axios'); //adiciona a api axios para a utilização de outras apis  (yarn add axios)
const Dev = require('../models/Dev'); //importa o model Dev
const parseStringAsArray = require('../utils/parseStringAsArray'); 
//métodos do controller:  index(lista de inf), show(uma única inf ), store(criar inf), update( alterar inf), destroy(destruir inf)
module.exports = 
{
    async index(request, response)
    {
        const devs = await Dev.find();
        return response.json(devs);    
    },
    async store(request, response)
    {
        const {github_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne({github_username});
        if(!dev)
        {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        const {name = login, avatar_url, bio} = apiResponse.data; // name = login é para caso não exista o name ele pegue o valor de login
        const techsArray = parseStringAsArray(techs); //transforma a string que vem do techs do request.body em um array, map percorre o array criado e utiliza o método trim para retirar os espaços
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }; 
        dev =  await Dev.create(
            {
                github_username, 
                name, 
                avatar_url, 
                bio,
                techs: techsArray,
                location, 
            }
        );
        }
        
        return response.json(dev); 
    },
    async update()
    {

    }, 
    async destroy()
    {

    },
};