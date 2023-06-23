

const mongoose = require('mongoose');

const statesSchema = new mongoose.Schema(({
    state:{
        type: String,
        required: true,
    },
    code :{
        type:String,
        required:true,
        unique:true
    },
    abbrev:{
        type:String,
    }
}))

const stateModel = mongoose.model('states',statesSchema)
module.exports = stateModel