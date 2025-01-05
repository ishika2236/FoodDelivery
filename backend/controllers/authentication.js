const user = require('../models/userModel');
const generateAuthToken = require('../config/authToken');
const bcrypt = require('bcryptjs');

// Register a new user
const handleRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 8);

        // Create new user
        const newUser = await user.create({ name, email, password: hashedPassword });

        // Generate auth token
        const token = await newUser.generateAuthToken();

        res.status(201).send({ newUser, token });
    } catch (error) {
        res.status(400).send({ error: `Error while registering user: ${error.message}` });
    }
};

// Login an existing user
const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ error: 'User not found' });
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate auth token
        const token = await existingUser.generateAuthToken();
        
        res.status(200).send({ existingUser, token });
    } catch (error) {
        res.status(500).json({ error: `Server error occurred while logging in user: ${error.message}` });
    }
};

module.exports = { handleRegister, handleLogin };
