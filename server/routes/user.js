const _ = require('lodash');
const express = require('express');
const {User} = require('./../models/user');
const userRouter = express.Router();
var {authenticate} = require('./../middleware/authenticate');

userRouter.post('', function (req, res) {
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

userRouter.get('/me',authenticate,(req, res) => {
  res.send(req.user);
});

userRouter.post('/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
    //res.send(user);
  }).catch((e) => {
    res.status(400).send();
  });
});

userRouter.delete('/me/token',authenticate,(req, res) => {
  req.user.removeToken(req.token).then(()=>{
    res.status(200).send();
  }, () =>{
    res.status(400).send();
  });
});

module.exports = {userRouter};