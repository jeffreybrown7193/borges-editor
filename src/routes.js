const MongoClient = require('mongodb').MongoClient;
module.exports = function(app) {

  app.get('/api/projects', function(req, res) {
    MongoClient.connect('mongodb://localhost:27017/borges', (err, client) => {
      var db = client.db('borges');
      db.collection('writingProjects').find().toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
      });
    });
  });

};
