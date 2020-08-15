const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jeffreyallanbrown:<password>@borges.na4zy.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
require('express');

module.exports = function(app){

  app.get('/api/projects', (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
      const collection = client.db("borges");
      res.send(collection);
      client.close();
    });
  });

  //other routes..
}
