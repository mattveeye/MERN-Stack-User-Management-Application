const User = require("../models/User");

// Geting data Main Page
exports.getMyData = async (req, res) => {
  const owner = req.user.name;
  try {
    const myData = await User.find({ owner: owner });
    res.json(myData);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: "problem with data" });
  }
};

// Posting Data Main Page
exports.addData = async (req, res) => {
  const { name, password } = req.body;
  const owner = req.user.name;
  try {
    const newItem = new User({ name, password, owner });
    await newItem.save();

    res.status(201).json({ message: "Item added" });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: "problem while adding data" });
  }
};

// Deleting Data Main Page
exports.deleteData = async (req, res) => {
  const { name } = req.body;
  const owner = req.user.name;
  try {
    await User.deleteMany({ name, owner });
    res.status(200).json({ message: "OK" });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: "problem while deleting data" });
  }
};

// Updating Data Main Page
exports.updateData = async (req, res) => {
  const { name, newPassword } = req.body;
  const owner = req.user.name;
  try {
    const updated = await User.findOneAndUpdate(
      { name, owner },
      { password: newPassword },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "User not found or no access" });
    }

    res.status(200).json({ message: "Password updated" });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: "problem while updating data" });
  }
};