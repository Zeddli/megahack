/**
 * Base error class
 */
export class BaseError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * 400 Bad Request - Invalid input
 */
export class BadRequestError extends BaseError {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
}

/**
 * 401 Unauthorized - Authentication failure
 */
export class UnauthorizedError extends BaseError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

/**
 * 403 Forbidden - Permission denied
 */
export class ForbiddenError extends BaseError {
  constructor(message = 'Forbidden') {
    super(message, 403);
  }
}

/**
 * 404 Not Found - Resource not found
 */
export class NotFoundError extends BaseError {
  constructor(message = 'Not Found') {
    super(message, 404);
  }
}

/**
 * 500 Internal Server Error - Unexpected server error
 */
export class InternalServerError extends BaseError {
  constructor(message = 'Internal Server Error') {
    super(message, 500);
  }
}

/**
 * 409 Conflict - Resource already exists
 */
export class ConflictError extends BaseError {
  constructor(message = 'Conflict') {
    super(message, 409);
  }
}

/**
 * Error handler middleware for Express
 */
export const errorHandler = (err: any, req: any, res: any, next: any) => {
  console.error(err);
  
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
  }

  // Handle Appwrite errors
  if (err.code && typeof err.code === 'number') {
    let statusCode = 500;
    
    // Map Appwrite error codes to HTTP status codes
    switch (err.code) {
      case 401: // Unauthorized
      case 401: // Authentication needed
        statusCode = 401;
        break;
      case 403: // Forbidden
        statusCode = 403;
        break;
      case 404: // Not found
        statusCode = 404;
        break;
      case 409: // Document already exists
        statusCode = 409;
        break;
      case 400: // General validation error
      case 422: // Invalid format
        statusCode = 400;
        break;
      default:
        statusCode = 500;
    }
    
    return res.status(statusCode).json({
      success: false,
      message: err.message || 'Database operation failed',
      error: err.type || 'AppwriteError'
    });
  }
  
  return res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
}; 