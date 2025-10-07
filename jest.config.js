export default {
  // Use babel-jest to transform ES6 modules
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  
  // File extensions to consider
  moduleFileExtensions: ['js', 'jsx'],
  
  // Test file patterns
  testMatch: [
    '**/__tests__/**/*.(js|jsx)',
    '**/*.(test|spec).(js|jsx)'
  ],
  
  // Setup files to run before tests
  setupFilesAfterEnv: [],
  
  // Coverage configuration
  collectCoverageFrom: [
    'src/resolvers/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/frontend/**/*.{js,jsx}' // Exclude frontend from coverage
  ],
  
  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // Test environment
  testEnvironment: 'node',
  
  // Clear mocks between tests
  clearMocks: true,
  
  // Restore mocks after each test
  restoreMocks: true,
  
  // Disable watchman to avoid permission issues
  watchman: false
};