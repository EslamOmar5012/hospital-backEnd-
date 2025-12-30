export default class ApiError extends Error {
  constructor(message, statusCode, isOperational) {
    super(message);
    statusCode = this.statusCode;
    isOperational = this.isOperational;
  }
}
