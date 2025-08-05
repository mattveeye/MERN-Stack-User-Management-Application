const bcrypt = require("bcrypt");
const Account = require("../models/Account");
const jwt = require("jsonwebtoken");
require('dotenv').config()
exports.register = async (req, res) => {
  try {


    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ error: "Name and password required" });
    }


    const existing = await Account.findOne({ name });
    if (existing) {
      return res.status(409).json({ error: "This user exists." });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = new Account({ name, password: hash });
    await user.save();

    return res.status(201).json({ message: "OK" });
  } catch (e) {
    console.error("[REGISTER ERROR]", e);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    console.log("[LOGIN] body:", req.body);

    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ error: "Name and password required" });
    }

    const account = await Account.findOne({ name });
    if (!account) {
      return res.status(401).json({ error: "No such user" });
    }

    const isOk = await bcrypt.compare(password, account.password);
    if (!isOk) {
      return res.status(401).json({ error: "Wrong password" });
    }

    const token = jwt.sign({ name: account.name }, process.env.ACCESS_TOKEN, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 3600000,
    });

    return res.status(200).json({ message: "OK" });
  } catch (e) {
    console.error("[LOGIN ERROR]", e);
    return res.status(500).json({ error: "Internal server error" });
  }
};
exports.logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
    });
    res.status(200).json({ message: "Logged out" });
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: "ERROR DURING LOGGING OUT" });
  }
};
console.log("Exports:", Object.keys(exports));