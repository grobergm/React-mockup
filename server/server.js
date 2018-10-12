//server/server.js
const express = require('express'),
Routes = require('./routes'),
path = require('path'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.connect('mongodb://localhost/pets');

app.use('/', Routes);

module.exports=app;