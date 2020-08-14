// required modules =================================================
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// db configuration ===========================================
require('./db-config/db-config');

// define mongoose schema
require('./db-config/schema/projectSchema');

// set our port
const port = process.env.PORT || 4201;

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
require('./routes/api')(app); // configure our routes

// start app ===============================================
app.listen(port);

// shoutout to the user
console.log('Okay...Listening on port ' + port);

// expose app
exports = module.exports = app;
