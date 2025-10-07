/**
 * Service module for handling message operations
 * This module contains all message-related business logic
 */

/**
 * Retrieves a secret message
 * @returns {string} The secret message
 */
export const getSecretMessage = () => {
  return 'This is my cool message';
};

/**
 * Retrieves a personalized greeting message
 * @param {string} name - The name to include in the greeting
 * @returns {string} A personalized greeting message
 */
export const getGreetingMessage = (name = 'World') => {
  return `Hello, ${name}!`;
};