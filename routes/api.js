const mongoose = require('mongoose');

module.exports = function(app) {

  app.get('/api/projects', function(req, res) {
    mongoose.connect('mongodb+srv://jeffreyallanbrown:LittleDusty2021%21@borges.na4zy.gcp.mongodb.net/borges', {useNewUrlParser: true,useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    console.log(db);

  });

};
