const { Schema, model } = require("mongoose");


const jewellerySchema = new Schema({
    jewelleryname:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default: Date.now,
    },
    image:{
        type:String,
        required:true,
    }
},{timestamps:true})

const Jewellery = model('jewellery',jewellerySchema);

module.exports = Jewellery;