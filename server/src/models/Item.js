const mongoose = require('mongoose');



const itemchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    kind:String,
    brand:String,
    cartCount:Number,
    images:[]
});

const Item = mongoose.model("Item", itemchema);

exports.Item = Item;