const { Schema, default: mongoose } = require("mongoose");
const { newID } = require("./main");

const UserSchema = new Schema({
  id: {
    type: String,
    default: newID(),
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: new Date(),
  },

  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  followings: {
    type: [String],
  },
  followers: {
    type: [String],
  },
  avatar: String,
});

// create model
const User = mongoose.model("users", UserSchema);

module.exports = { User, UserSchema };