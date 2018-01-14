var mongoose = require('mongoose');

var Promotion = mongoose.model('Promotion',{
  description:{
    type: String,
    required: true,
    minlengh: 1,
    trim: true
  },
  image:{
    type: String,
    required: true,
    minlengh: 1,
    trim: true
  },
  endDate:{
    type: Date
  },
  _creator:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = { Promotion };