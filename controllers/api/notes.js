const Note = require('../../models/note');

module.exports = {
  index,
  create
};

async function index(req, res) {
  const notes = await Note.find({user: req.user._id});
  res.status(200).json(notes)
}

async function create(req, res) {
  try {
    // Add the user to the db
    req.body.user = req.user._id
    const note = await Note.create(req.body);
    note.save();
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}