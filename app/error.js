const notFoundHandler = (_req, res, next) => {
  const error = new Error("Resous not Found !!");
  error.status = 404;
  next(error);
};

const errorHandler = (error, _req, res, next) => {
  if (error.status) {
    res.status(error.status).json({ message: error.message });
  } else {
    res.status(500).json({
      message: "Something Went wrong in Server",
    });
  }
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
