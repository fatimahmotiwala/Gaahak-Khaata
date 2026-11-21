function errorHandler(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message;

  if (err.name === 'ValidationError') status = 400;          // Mongoose validation
  if (err.name === 'CastError') { status = 404; message = 'Not found'; } // bad id
  if (err.code === 11000) { status = 409; message = 'Already exists'; }  // duplicate

  if (status === 500) {
    console.error(err);
    message = 'Something went wrong on the server';
  }
  res.status(status).json({ message });
}

module.exports = errorHandler;