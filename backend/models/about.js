const { Schema, model } = require("mongoose");


const aboutSchema = new Schema({
    abouttitle:{
        type:String,
        require:true,
    },
    aboutdescription:{
        type:String,
        require:true,
    }
},{timestamps:true})

const AboutSection = model('aboutsection',aboutSchema)

module.exports = AboutSection;