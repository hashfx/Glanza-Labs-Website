const form = document.getElementById('userForm');
const message = document.getElementById('message');
const express = require('express');
const app = express();

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
app.listen(3000, () => console.log('Server listening on port 3000'));
