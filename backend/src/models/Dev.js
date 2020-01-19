const mongoose = require('mongoose'); 
const PointSchema = require('./utils/PointSchema');
const DevSchema = new mongoose.Schema(
    {
        name: String,
        github_username: String,
        bio: String, 
        avatar_url: String, 
        techs: [String], //pra armazenar umas string
        location: {
            type: PointSchema,
            index: '2dsphere' //index de geolocalização 
        }
    }
);

module.exports = mongoose.model('Dev', DevSchema); 