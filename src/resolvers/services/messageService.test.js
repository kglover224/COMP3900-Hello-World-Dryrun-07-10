import { getSecretMessage, getGreetingMessage } from './messageService.js';

describe('MessageService', () => {
  describe('getSecretMessage', () => {
    it('should return the correct secret message', () => {
      const result = getSecretMessage();
      expect(result).toBe('This is a secret message.');
    });

    it('should return a string type', () => {
      const result = getSecretMessage();
      expect(typeof result).toBe('string');
    });

    it('should return a non-empty string', () => {
      const result = getSecretMessage();
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return consistent results on multiple calls', () => {
      const firstCall = getSecretMessage();
      const secondCall = getSecretMessage();
      expect(firstCall).toBe(secondCall);
    });

    it('should contain the word "secret"', () => {
      const result = getSecretMessage();
      expect(result.toLowerCase()).toContain('secret');
    });

    it('should be properly formatted as a sentence', () => {
      const result = getSecretMessage();
      expect(result).toMatch(/^[A-Z].*\.$/);
    });
  });

  describe('getGreetingMessage', () => {
    it('should return default greeting when no name provided', () => {
      const result = getGreetingMessage();
      expect(result).toBe('Hello, World!');
    });

    it('should return personalized greeting with provided name', () => {
      const result = getGreetingMessage('Alice');
      expect(result).toBe('Hello, Alice!');
    });

    it('should handle empty string name', () => {
      const result = getGreetingMessage('');
      expect(result).toBe('Hello, !');
    });

    it('should handle special characters in name', () => {
      const result = getGreetingMessage('José-María');
      expect(result).toBe('Hello, José-María!');
    });

    it('should handle numeric input as string', () => {
      const result = getGreetingMessage('123');
      expect(result).toBe('Hello, 123!');
    });
  });
});