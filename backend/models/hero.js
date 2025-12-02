const { Schema, model } = require("mongoose");


const heroSchema = new Schema({
    herotitle:{
        type:String,
        required:true,
    },
    herodescription:{
        type:String,
        required:true,
    }
},{timestamps:true})

const HeroSection = model('herosection',heroSchema)

module.exports = HeroSection;