var crypto = require('crypto');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  email: { type: String, required: true, unique: true},
  username : { type: String, unique: true, required: true},
  password: String,
  name: String
},
{
  collection: "User"
});

// plugin for passport-local-mongoose
UserSchema.plugin(passportLocalMongoose);

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

const User = new mongoose.model("User", UserSchema);

module.exports = User;
