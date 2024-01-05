const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/test";
async function connectDB() {
  await mongoose.connect(MONGO_URI);

  return "connect DB ok";
}

module.exports = { connectDB };