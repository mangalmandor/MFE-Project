require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json()); // Request body se JSON data padhne ke liye
app.use(cors()); // Host app aur React Auth app ko API call karne allow karega

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("📦 MongoDB Connected Successfully!"))
    .catch((err) => console.log("DB Connection Error:", err));

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Auth Backend running on port ${PORT}`));