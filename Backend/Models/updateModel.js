const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
    description:{
        type:String,  
        required: [true] 
    },
    timeDate:{
        type:Date,
        required: [true] 

    }
});

const UpdateModel = mongoose.model('UpdateModel',updateSchema);

module.exports = UpdateModel;