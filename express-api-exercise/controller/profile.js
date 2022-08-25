exports.getProfile = async (req, res, next) => {
  try {
    res.send("getProfile");
  } catch (err) {
    next(err);
  }
};

exports.followUser = async (req, res, next) => {
  try {
    res.send("followUser");
  } catch (err) {
    next(err);
  }
};

exports.unfollowUser = async (req, res, next) => {
  try {
    res.send("unfollowUser");
  } catch (err) {
    next(err);
  }
};
