/**
 * Integration Tests for Resolver System
 * 
 * These tests verify that all modules work together correctly without mocking
 * internal dependencies. They test the full flow from resolver to services.
 */

import { handler } from './index.js';

// Only mock the @forge/resolver module (external dependency)
// DO NOT mock internal services/utils - we want to test their integration
jest.mock('@forge/resolver', () => {
  return jest.fn().mockImplementation(() => {
    const definitions = {};
    
    return {
      define: jest.fn((name, resolver) => {
        definitions[name] = resolver;
      }),
      getDefinitions: jest.fn(() => definitions)
    };
  });
});

describe('Resolver Integration Tests', () => {
  let consoleLogSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    // Spy on console methods to verify logging behavior
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console methods after each test
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  describe('End-to-End Flow', () => {
    it('should handle real-world Forge request structure', () => {
      const forgeRequest = {
        context: {
          cloudId: 'ari:cloud:jira::12345678-1234-1234-1234-123456789012',
          environmentId: 'prod-east-1',
          environmentType: 'production',
          moduleKey: 'hello-world-panel',
          principal: {
            type: 'user',
            accountId: '5d123456789012345678901a'
          },
          siteUrl: 'https://test-site.atlassian.net',
        },
        payload: {
          issueKey: 'DEMO-123',
          issueId: '10001',
          projectKey: 'DEMO',
          projectId: '10000'
        }
      };

      const result = handler.getText(forgeRequest);

      // Verify integration with realistic data
      expect(result).toBe('This is a secret message. Do not tell anyone (except Kit)!!');
      expect(consoleLogSpy).toHaveBeenCalledWith(forgeRequest);
    });
  });

});