const _ = require('lodash');
const express = require('express');
const {Comment} = require('./../models/comment');
const commentRouter = express.Router();
var {authenticate} = require('./../middleware/authenticate');

commentRouter.post('', authenticate,function (req, res) {
    var body = _.pick(req.body,['text','_creatorUser','_creatorPromotion']);
    
    var comment = new Comment(body);
  
    comment.save().then(() =>{
      res.send(comment);
    }).catch((e)=> {
      res.status(400).send(e);
    });
      
});

module.exports = {commentRouter};