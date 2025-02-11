const mongoose = require('./db');

const ItemsDetail = new mongoose.Schema({
    name:{type: 'string', required: true},
    price: {type: 'number', required: true},
});

const Items = mongoose.model('Items',ItemsDetail);

model.exports = Items;

