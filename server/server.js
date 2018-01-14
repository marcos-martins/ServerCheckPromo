const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
const { userRouter } = require('./routes/user');
const { promotionRouter } = require('./routes/promotion');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/promotions', promotionRouter);

app.listen(port, ()=>{
    console.log(`Started up at port ${port}`);
  });

