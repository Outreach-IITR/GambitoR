const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
    description:{
        type:String,   
    },
    timeDate:{
        type:Date,
    }
});

const UpdateModel = mongoose.model('UpdateModel',updateSchema);

module.exports = UpdateModel;