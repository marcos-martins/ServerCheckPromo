const _ = require('lodash');
const express = require('express');
const {User} = require('./../models/user');
const userRouter = express.Router();


userRouter.post('/me', function (req, res) {
  var body = _.pick(req.body,['email','password','name','photo']);
  
  var user = new User(body);

  user.save().then(() =>{
    return user.generateAuthToken();
  }).then((token) =>{
    res.header('x-auth',token).send(user);
  }).catch((e)=> {
    res.status(400).send(e);
  });
    
});

module.exports = {userRouter};