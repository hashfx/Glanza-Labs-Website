const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: (value) => /\S+@\S+\.\S+/.test(value),
      message: 'Please enter a valid email address',
    },
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    trim: true,
  },
  profileImage: {
    type: String,
    trim: true,
  },
  profession: {
    type: [String],
    enum: ['Lawyer', 'Electrician', 'Consultant', 'Developer', 'Doctor'],
  },
  workWith: {
    type: String,
    enum: ['Lawyer', 'Electrician', 'Consultant', 'Developer', 'Doctor'],
  },
});

userSchema.pre('save', async function (next) {
  if (this.isNew && this.password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

module.exports = model('User', userSchema);
