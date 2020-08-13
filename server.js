// modules =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var methodOverride = require('method-override');

// configuration ===========================================
const uri = "mongodb+srv://jeffreyallanbrown:LittleDusty2021!@borges.na4zy.gcp.mongodb.net/borges";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const db = client.db("borges");
  return db;
});

// set our port
var port = process.env.PORT || 4201;

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location
app.use(express.static(__dirname + '/src/app/assets'));

// routes ==================================================
require('./src/routes')(app); // configure our routes

// start app ===============================================
app.listen(port);

// shoutout to the user
console.log('Okay...Listening on port ' + port);

// expose app
exports = module.exports = app;
