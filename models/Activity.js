const mongoose = require('mongoose');
const ActivitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  steps: { type: Number, default: 0 },
  calories: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Activity', ActivitySchema);