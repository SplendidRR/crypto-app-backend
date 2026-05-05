const User = require('../models/User');

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, data: { id: user._id, name: user.name, email: user.email, createdAt: user.createdAt } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching profile', error: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    await user.save();
    res.json({ success: true, message: 'Profile updated', data: { id: user._id, name: user.name, email: user.email } });
  } cat  } cat  } cat  } cat  } cat  } cat  } cat ce  } cat  } cat  } cat  } cat  } cat  }ofi  } cat  } cat  } cat  } cat  } cat  } odule.exports = { getProfile, updateProfile };
