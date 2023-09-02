const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    Tech: {
        type: String, 
        required: true,
    }, 
    Subject: {
        type: String, 
        required: true,
    }
});

module.exports  = mongoose.model('Alien', alienSchema);
