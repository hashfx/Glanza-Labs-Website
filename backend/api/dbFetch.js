const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../.env');
const User = require('../models/user'); // Assuming User model is in models/user.js
const form = document.getElementById('userForm');
const message = document.getElementById('message');

const router = express.Router();

// **Error Handling Middleware (Optional but recommended):**
const handleErrors = (err, res) => {
    console.error(err);
    if (err instanceof mongoose.Error.ValidationError) {
        const errors = Object.values(err.errors).map(error => error.message);
        return res.status(400).json({ message: errors.join(', ') });
    }
    if (err.code === 11000) { // Duplicate key error (e.g., email or username)
        return res.status(400).json({ message: 'Duplicate field value entered' });
    }
    return res.status(500).json({ message: 'Internal server error' });
};

/*
// **GET All Users (Optional - adjust permission checks if needed):**
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users);
    } catch (err) {
        handleErrors(err, res);
    }
});

// **GET User by ID:**
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        handleErrors(err, res);
    }
});

// **POST Create User:**
router.post('/users', async (req, res) => {
    const { email, password, displayName, username, country } = req.body;

    // Validate limited options for country and other required fields
    if (!email || !password || !displayName || !username || !country) {
        return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    if (!['India', 'Turkey', 'USA', 'UK', 'UAE'].includes(country)) {
        return res.status(400).json({ message: 'Invalid country value' });
    }

    try {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            email,
            hash_password: hashedPassword,
            displayName,
            username,
            role,
            country,
            profilePicture,
        });

        const savedUser = await newUser.save();

        // Create JWT token
        const token = jwt.sign({ userId: savedUser._id }, SECRET_KEY, {
            expiresIn: '3600h', // 1 hour
        });

        res.status(201).json({ message: 'User created successfully', token });
    } catch (err) {
        handleErrors(err, res);
    }
});

// **PUT Update User:**
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { email, password, displayName, username, country } = req.body;

    // Validate limited options for country and other required fields (if applicable)
    if (email && !email.trim()) {
        return res.status(400).json({ message: 'Email cannot be empty' });
    }
    if (displayName && !displayName.trim()) {
        return res.status(400).json({ message: 'Display name cannot be empty' });
    }
    if (username && !username.trim()) {
        return res.status(400).json({ message: 'Username cannot be empty' });
    }
    if (!['India', 'Turkey', 'USA', 'UK', 'UAE'].includes(country)) {
        return res.status(400).json({ message: 'Invalid country value' });
    }

    try {
        // Optional: Check if user is authorized to update this user (e.g., updating their own profile)
        // Implement logic based on your authentication scheme (e.g., checking user ID in JWT token)

        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated user document
            runValidators: true, // Apply validation rules on update
        });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (err) {
        handleErrors(err, res);
    }
});
*/

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // const email = document.getElementById('email').value;
    // const password = document.getElementById('hash_password').value;
    // const displayName = document.getElementById('displayName').value;
    // const username = document.getElementById('username').value;
    // const country = document.getElementById('country').value;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Simple validation (optional)
    if (!email || !hash_password || !displayName || !username || !country) {
        message.textContent = 'Please fill in all required fields.';
        return;
    }

    app.post('/signup', async (req, res) => {
        const { email, hash_password, displayName, username, country } = req.body;

        try {
            // Hash the password
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(hash_password, saltRounds);

            // Create new user
            const user = new User({
                email,
                hash_password: hashedPassword,
                displayName,
                username,
                country,
            });

            // Save user to database
            await user.save();
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
});
