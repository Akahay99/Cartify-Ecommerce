const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // add bcrypt
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/cartify")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Mongoose Schema
const Users = mongoose.model('Users', {
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object },
  date: { type: Date, default: Date.now }
});

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

// Signup
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await Users.findOne({ email });
    if (existingUser) return res.status(400).json({ success: false, error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10); // hash password

    const user = new Users({
      email,
      password: hashedPassword,
      cartData: {} // empty cart
    });

    await user.save();

    const token = jwt.sign({ user: { email: user.email } }, 'secret_ecom');
    res.json({ success: true, token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ success: false, error: "Wrong email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, error: "Wrong email or password" });

    const token = jwt.sign({ user: { email: user.email } }, 'secret_ecom');
    res.json({ success: true, token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`✅ Server started on http://localhost:${port}`);
});
