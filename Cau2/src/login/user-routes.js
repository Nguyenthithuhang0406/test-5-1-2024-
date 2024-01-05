const { getMe } = require("./user_controler");

const userRoute = require("express").Router();

userRoute.get("/me", getMe);

module.exports = { userRoute };