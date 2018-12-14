const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  googleAccessToken: String
});

mongoose.model('users', userSchema);
