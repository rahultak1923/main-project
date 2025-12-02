const { Schema, model } = require("mongoose");

const titleSchema = new Schema({
    websitetitle:{
        type:String,
        required:true,
    }
},{timestamp:true})

const TitleSection = model('titlesection',titleSchema)

module.exports = TitleSection;