// middleware for checking JWT token for preventing access to unknown users

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Access denied. No token provided." });
    }

    const secret = process.env.ACCESS_TOKEN;

    const decoded = jwt.verify(token, secret);

    req.user = { name: decoded.name }; 
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
};
