const User = require('../models/userModel');

exports.getUser = async (req, res) => {
  try {
    const user = await User.find({id:req.params.id});
    res.status(200).json(user);
  } catch (error) {
    // res.status(500).json({ error: error.message });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
    const user = new User({
       id: req.body.id,
       name: req.body.name,
       gender: req.body.gender,
    });
    try {
      const usercreate = user.save();
      res.status(200).json(usercreate);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const datatoupdate = req.body;
    const options = {new:true}

    const result = await User.findByIdAndUpdate(
      id, datatoupdate, options
    )
    res.send(result)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};