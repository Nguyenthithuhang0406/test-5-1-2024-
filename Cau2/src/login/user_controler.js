

const getMe = async (req, res, next) => {
  try {
    const user = req["user"];
    res.json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = { getMe };