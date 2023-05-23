const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({   
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
  },
});

// Create and export the User model
module.exports = mongoose.model('samplemongos', userSchema);