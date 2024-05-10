const mongoose = require("mongoose");
const connectDB = (url) => {
  return mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error Connecting to MongoDB: ', err));
};

module.exports = connectDB;