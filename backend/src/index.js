 const express = require('express'); //cria o acesso ao express
 const mongoose = require('mongoose'); // cria o acesso ao mongo
 const cors = require('cors'); // habilita o cors, o cors habolita a permissão de acesso externo na api 
 const routes = require('./routes'); // importa os routes 
 const http = require('http'); // importando o método http
 const { setupWebsocket} = require('./websocket');
 
 const app = express(); // cria a aplicação
 const server = http.Server(app); //extraiu o servidor do express 

 setupWebsocket(server);

 mongoose.connect('mongodb+srv://david:<password>@cluster0-sykqt.mongodb.net/Week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true  
 });//conexão com o mongoDB

app.use(cors());
 app.use(express.json()); // habilitar a utilização de arquivos JSON pelo express em todos os métodos http
 app.use(routes); //habilita a utilização das rotas 
server.listen(3333); //define a porta para o localhost 

