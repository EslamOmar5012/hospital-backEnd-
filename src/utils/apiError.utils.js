class ApiError extends Error {
  constructor(message, statusCode, isOperational) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
  }
}

const handleApiError = (message, statusCode, isOperational = false) =>
  new ApiError(message, statusCode, isOperational);

export default handleApiError;
