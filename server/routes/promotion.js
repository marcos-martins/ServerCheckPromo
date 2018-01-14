const _ = require('lodash');
const express = require('express');
const {Promotion} = require('./../models/promotion');
const promotionRouter = express.Router();
var {authenticate} = require('./../middleware/authenticate');

promotionRouter.post('', authenticate,function (req, res) {
    var body = _.pick(req.body,['description','image','endDate','_creator']);
    
    var promotion = new Promotion(body);
  
    promotion.save().then(() =>{
      res.send(promotion);
    }).catch((e)=> {
      res.status(400).send(e);
    });
      
});

module.exports = {promotionRouter};