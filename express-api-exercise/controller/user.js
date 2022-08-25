exports.register = async (req, res, next) => {
  try {
    res.send("register");
  } catch (err) {
    next();
  }
};

exports.login = async (req, res, next) => {
  try {
    res.send("login");
  } catch (err) {
    next(err);
  }
};

exports.getCurrenUser = async (req, res, next) => {
  try {
    res.send("getCurrentUser");
  } catch (err) {
    next(err);
  }
};

exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send("updateCurrentUser");
  } catch (err) {
    next(err);
  }
};
