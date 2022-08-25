exports.listtArticle = async (req, res, next) => {
  try {
    res.send("listArticle");
  } catch (err) {
    next(err);
  }
};

exports.feedArticle = async (req, res, next) => {
  try {
    res.send("feedArticle");
  } catch (err) {
    next(err);
  }
};

exports.getArticle = async (req, res, next) => {
  try {
    res.send("getArticle");
  } catch (err) {
    next(err);
  }
};

exports.createArticle = async (req, res, next) => {
  try {
    res.send("createArticle");
  } catch (err) {
    next(err);
  }
};

exports.updateArticle = async (req, res, next) => {
  try {
    res.send("updateArticle");
  } catch (err) {
    next(err);
  }
};

exports.deleteArticle = async (req, res, next) => {
  try {
    res.send("deleteArticle");
  } catch (err) {
    next(err);
  }
};

exports.addCommentsFromAnArticle = async (req, res, next) => {
  try {
    res.send("addCommentsFromAnArticle");
  } catch (err) {
    next(err);
  }
};

exports.getCommentsFromAnArticle = async (req, res, next) => {
  try {
    res.send("Get Comments from an Article");
  } catch (err) {
    next(err);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    res.send("Delete Comment");
  } catch (err) {
    next(err);
  }
};

exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send("favoriteArticle");
  } catch (err) {
    next(err);
  }
};

exports.unfavoriteArticle = async (req, res, next) => {
  try {
    res.send("unfavoriteArticle");
  } catch (err) {
    next(err);
  }
};
