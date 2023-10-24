const express = require('express');
const router = express.Router();
const { User, validate } = require('../Models/Users');
const bcrypt = require('bcrypt');

// User registration endpoint
router.post('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
        const errorMessage = error.details[0].message;
        return res.status(400).send({ message: errorMessage });
      }      

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(409).send({ message: "User with this email already exists" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "The User was successfully Created" });
} catch (error) {
    console.error('Error:', error); // Log the error details
    res.status(500).send({ message: "Server Error" });
  }
});

// Retrieve all users
router.get('/', async (req, res) => {
  try {
    const userList = await User.find();

    if (!userList) {
      res.status(500).json({ success: false });
    }
    res.send(userList);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get user count
router.get('/count', async (req, res) => {
  try {
    const userCount = await User.countDocuments();

    res.send({
      userCount: userCount,
    });
  } catch (error) {
    console.error('Error counting users:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
