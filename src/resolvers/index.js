import Resolver from '@forge/resolver';
import { getSecretMessage } from './services/messageService.js';
import { logRequest } from './utils/logger.js';

const resolver = new Resolver();

/**
 * Resolver function that retrieves and returns a secret message
 * @param {Object} req - The Forge request object containing context and payload
 * @returns {string} The secret message
 */
const getTextResolver = (req) => {
  logRequest(req);
  return getSecretMessage();
};

// Register resolver functions
resolver.define('getText', getTextResolver);

// Export both the handler and individual functions for testing
export const handler = resolver.getDefinitions();
export { getTextResolver };
