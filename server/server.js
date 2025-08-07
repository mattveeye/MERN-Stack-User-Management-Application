const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// db
connectDB();

app.use(express.json());
app.use(cookieParser());

// CORS

app.use(
  require("cors")({
    origin: ["http://localhost:3000", "http://backend:3000"],
    credentials: true,
  })
);

// routes
app.use("", require("./routes/authRoutes"));
app.use("", require("./routes/dataRoutes"));

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
