const socketio = require('socket.io'); 
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculeDistance = require('./utils/calculeDistance'); 

let io; 
const connections = []; 

exports.setupWebsocket = (server) => {
    
     io = socketio(server); 

    io.on('connection', socket =>
     {
        
       const {latitude, longitude, techs} = socket.handshake.query;
        
        connections.push(
            {
                id : socket.id,
                coordinates: {
                    latitude: Number(latitude),
                    longitude: Number(longitude),
                },
                techs: parseStringAsArray(techs),
            }
        );
       /* setTimeout(()=> {
            socket.emit('message', 'Hello')
        },3000);  teste de socket enviando uma msg */
    });   
};

exports.findConnections = (coordinates, techs) => 
{
    return connections.filter(connection =>
        {
            console.log(connection.coordinates);
            return calculeDistance(coordinates, connection.coordinates) < 10 && connection.techs.some(item=> techs.includes(item));  
    //comparando as coordenadas do dev recém cadastrado com as dos devs já cadastrados 
    //com as coordenadas armazenadas em connections se está até 10km e tambem as techs do dev 
        }) 
}

exports.sendMessage = (to, message, data ) => 
{
    to.forEach(connection =>
        {
            io.to(connection.id).emit(message, data);
        }
    );
}