const mongoose = require('mongoose');
mongoose.Connect('mongodb://localhost:27017/employees')


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
