const express = require('express');
const User = require('../schema/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../.env');

const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
    try {
        const { email, password, name, profileImage, profession, workWith } = req.body;

        // Basic validation
        if (!email || !password || !name) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            email,
            password: hashedPassword,
            name,
            profileImage,
            profession,
            workWith,
        });

        const savedUser = await newUser.save();

        // Create JWT token
        const token = jwt.sign({ userId: savedUser._id }, SECRET_KEY, {
            expiresIn: '3600h', // 1 hour
        });

        res.status(201).json({ message: 'User created successfully', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
