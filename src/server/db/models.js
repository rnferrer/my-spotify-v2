const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userID: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
  name : { type: String, required: true, unique: true }
});

const tokenSchema = new Schema ({
  userID: { type: String, required: true, unique: true },
  access: { type: String, required: true, unique: true },
  refresh: { type: String, required: true, unique: true }
})

const User = mongoose.model('user', userSchema);
const Token = mongoose.model('token', tokenSchema);

module.exports = { User, Token };