const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  dietaryAccommodations: [String],
  category: { type: String, required: true },
  person: { type: String, required: true },
});

module.exports = mongoose.model('Item', itemSchema);
