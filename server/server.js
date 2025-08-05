const express = require("express");
const app = express();
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
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Роуты
app.use("", require("./routes/authRoutes"));
app.use("", require("./routes/dataRoutes"));

// Сервер
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
