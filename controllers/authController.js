const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const user = await User.create({ name, email, password });
    const token = generateToken(user._id, user.email);

    res.status(201).json({ success: true, message: 'Registration successful', data: { userId: user._id, name: user.name, email: user.email }, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error registering user', error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user._id, user.email);
    res.json({ success: true, message: 'Login successful', data: { userId: user._id, name: user.name, email: user.email }, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error logging in', error: error.message });
  }
};

const logout = async (req, res) => {
  res.json({ success: true, message: 'Logged out successfully' });
};

module.exports = { register, login, logout };