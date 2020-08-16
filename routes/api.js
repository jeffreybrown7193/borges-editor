const express = require('express');
var assert = require('assert');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = "mongodb+srv://jeffreyallanbrown:LittleDusty2021!@borges.na4zy.gcp.mongodb.net/borges?retryWrites=true&w=majority";
const WritingProject = require('../schema/projectSchema');
require('express');

module.exports = function(app){

  app.get('/api/projects', (req, res) => {

    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
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
