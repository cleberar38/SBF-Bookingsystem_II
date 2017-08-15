const mongoose = require('mongoose');

// define the Plats model schema
const PlatsSchema = new mongoose.Schema({
  title: String,
  img: String,
  author: String,
  location: String,
  address: String
});

PlatsSchema.pre('save', function saveHook(next) {
  next();
});

module.exports = mongoose.model('Plat', PlatsSchema);
