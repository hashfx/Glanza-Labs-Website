const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const app = express();
var cors = require("cors");
const router = require("./routes/auth");
const bodyParser = require('body-parser');
const path = require('path');
app.use(cors());
app.use(express.json());
app.use("/api", router);
//Port and Connect to DB
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public'))); 
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log("error =>", error);
    }
};


start();

app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data

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
            country,
            // Add other user fields as needed (e.g., role, profilePicture)
        });

        // Save the new user to database
        const savedUser = await newUser.save();

        // Optional: Create a JWT token (for authentication)
        // const token = jwt.sign({ userId: savedUser._id }, SECRET_KEY, {
        //   expiresIn: '3600h', // 1 hour
        // });

        res.status(201).json({ message: 'User created successfully' }); // Or { message: 'User created successfully', token } (if JWT is implemented)
    } catch (err) {
        handleErrors(err, res);
    }
});
