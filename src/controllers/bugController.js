// backend/src/controllers/bugController.js
const bugs = [];

const getAllBugs = (req, res) => {
  res.json(bugs);
};

const createBug = (req, res) => {
  const newBug = req.body;
  bugs.push(newBug);
  res.json(newBug);
};

module.exports = {
  getAllBugs,
  createBug,
};
