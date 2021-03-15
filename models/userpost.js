const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userpostSchema = new Schema({

  date: { type: Date, default: Date.now },

  username: { type: String, required: true },
  
  title: { type: String, required: true }
});

const Userpost = mongoose.model("Userpost", userpostSchema);

module.exports = Userpost;