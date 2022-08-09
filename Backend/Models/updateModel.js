const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
    description:{
        type:String,  
        required: [true, 'Please provide description'],
    },
    timeDate:{
        type:Date,
        required: [true, 'Please provide date and time'],

    }
});

const UpdateModel = mongoose.model('UpdateModel',updateSchema);

module.exports = UpdateModel;