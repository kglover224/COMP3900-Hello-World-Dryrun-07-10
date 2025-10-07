/**
 * Utility module for logging operations
 * This module handles all logging-related functionality
 */

/**
 * Logs a request object to the console
 * @param {Object} req - The request object to log
 */
export const logRequest = (req) => {
  console.log(req);
};

/**
 * Logs an error with additional context
 * @param {Error} error - The error to log
 * @param {Object} context - Additional context information
 */
export const logError = (error, context = {}) => {
  console.error('Error occurred:', {
    message: error.message,
    stack: error.stack,
    context
  });
};