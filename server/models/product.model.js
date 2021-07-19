const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, "Title must be at least 5 characters."]
    },
    price: {
        type: Number,
        // required: [true, "You must input a price."]
    },
    desc: {
        type: String,
        // required:[true, "Please provide a brief description."]
    }
},{timestamps:true});

module.exports = mongoose.model("Product", ProductSchema);
