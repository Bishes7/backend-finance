export const errorHandler = (error, req, res, next) => {
  // Set default status code and messages

  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server error";

  console.log(error.message);

  res.status(statusCode).json({
    status: "error",
    message,
  });
};
