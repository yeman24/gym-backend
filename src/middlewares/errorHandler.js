export function errorHandler(error, _req, res, _next) {
  console.error(error);
  const status = error.statusCode ?? 500;
  res.status(status).json({ success: false, data: null, message: status === 500 ? "Something went wrong on the server." : error.message });
}
