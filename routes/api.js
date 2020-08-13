const MongoClient = require('mongodb').MongoClient;
module.exports = function(app) {


  app.get('/api/projects', function(req, res) {
    const uri = "mongodb+srv://jeffreyallanbrown:LittleDusty2021%21@borges.na4zy.gcp.mongodb.net";
    MongoClient.connect(uri, function(err, db){
      if (err) return console.log(err)
      db.adminCommand( { listDatabases: 1 } );
    });
  });
};
