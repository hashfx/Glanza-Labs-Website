// models/user.js

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

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
        type: [String], // Array to store multiple professions (checkboxes)
        enum: ['Lawyer', 'Electrician', 'Consultant', 'Developer', 'Doctor'],
    },
    workWith: { // Dropdown selection
        type: String,
        enum: ['Lawyer', 'Electrician', 'Consultant', 'Developer', 'Doctor'],
    },
});

export default model('User', userSchema);
