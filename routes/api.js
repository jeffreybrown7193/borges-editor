const express = require('express');
var assert = require('assert');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = "mongodb+srv://jeffreyallanbrown:LittleDusty2021!@borges.na4zy.gcp.mongodb.net/borges?retryWrites=true&w=majority";
const WritingProject = require('../mongo-schema/projectSchema');
require('express');

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
};

module.exports = function(app){

  app.get('/api/projects', (req, res) => {
    mongoose.connect(uri, mongoOptions);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      WritingProject.find({}, function (err, projects) {
        if (err) return console.error(err);
        res.send(projects);
      });
    });
  });

}
