var mongoose = require('mongoose');

var Comment = mongoose.model('Comment',{
  text:{
    type: String,
    required: true,
    minlengh: 1,
    trim: true
  }, 
  _creatorUser:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  _creatorPromotion:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = { Comment };