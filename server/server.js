const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
const { userRouter } = require('./routes/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', userRouter);


app.listen(port, ()=>{
    console.log(`Started up at port ${port}`);
  });

