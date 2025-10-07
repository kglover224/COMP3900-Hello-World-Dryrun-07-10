import { logRequest, logError } from './logger.js';

describe('Logger Utils', () => {
  let consoleLogSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  describe('logRequest', () => {
    it('should log request to console', () => {
      const mockRequest = { id: 'test-123', data: 'sample' };
      
      logRequest(mockRequest);
      
      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith(mockRequest);
    });

    it('should handle null request', () => {
      logRequest(null);
      
      expect(consoleLogSpy).toHaveBeenCalledWith(null);
    });

    it('should handle undefined request', () => {
      logRequest(undefined);
      
      expect(consoleLogSpy).toHaveBeenCalledWith(undefined);
    });

    it('should handle complex nested objects', () => {
      const complexRequest = {
        context: { cloudId: 'test', user: { id: '123' } },
        payload: { data: [1, 2, 3] }
      };
      
      logRequest(complexRequest);
      
      expect(consoleLogSpy).toHaveBeenCalledWith(complexRequest);
    });
  });

  describe('logError', () => {
    it('should log error with message and stack', () => {
      const mockError = new Error('Test error');
      
      logError(mockError);
      
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error occurred:', {
        message: 'Test error',
        stack: mockError.stack,
        context: {}
      });
    });

    it('should log error with additional context', () => {
      const mockError = new Error('Test error');
      const context = { userId: '123', action: 'getData' };
      
      logError(mockError, context);
      
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error occurred:', {
        message: 'Test error',
        stack: mockError.stack,
        context
      });
    });

    it('should handle error without stack trace', () => {
      const mockError = { message: 'Custom error' };
      
      logError(mockError);
      
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error occurred:', {
        message: 'Custom error',
        stack: undefined,
        context: {}
      });
    });
  });
});