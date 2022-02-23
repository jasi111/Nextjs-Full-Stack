import mongoose from 'mongoose';

//creating db model/schema
const HeroSchema = new mongoose.Schema ({
    superHero:{
        type:String,
        required:[true, 'Please name the hero'],
        unique: true,
        trim:true
    },

    realName:{
        type:String,
        required:true,
        maxlength:[200, 'please keep real name short']
    }


})

module.exports = mongoose.models.Hero || mongoose.model('Hero', HeroSchema)
//in next js this is how model is exported