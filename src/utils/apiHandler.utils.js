const apiHandler = (res, statusCode, state, message, data = undefined) =>
  res.status(statusCode).json({ status: state, message, data });

export default apiHandler;
