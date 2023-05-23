const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./app/routes/userRoutes');

const app = express();
const port = 3000;

// Database connection
mongoose.connect('mongodb://localhost:27017/mongonode', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});