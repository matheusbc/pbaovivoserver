var mongoose = require('mongoose');
var ChampionshipSchema = new mongoose.Schema({
  name: String,
  fi_fase_id: String,
  fi_championship_id: Number,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Championship', ChampionshipSchema);
