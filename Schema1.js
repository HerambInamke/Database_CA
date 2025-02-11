const mongoose = require('./db');

const RestaurantDetail = new mongoose.Schema({
    name:{type: 'string', required: true},
    city: {type: 'string', required: true},
    items: {type: 'array', required: true},
});

const Restaurant = mongoose.model('Restaurant',RestaurantDetail);

model.exports = Restaurant;
