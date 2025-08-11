const Activity = require('../models/Activity');

exports.saveActivity = async (req, res) => {
  try {
    const { userId, steps, calories } = req.body;
    const act = await Activity.create({ user: userId, steps, calories });
    res.json(act);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRecent = async (req, res) => {
  try {
    const { userId } = req.params;
    const list = await Activity.find({ user: userId }).sort({ date: -1 }).limit(30);
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};