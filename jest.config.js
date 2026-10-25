// jest.config.ts
export default {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/release/'],
  modulePathIgnorePatterns: ['<rootDir>/release/'],
  coverageDirectory: 'docs/coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: { ignoreCodes: [1343] },
      },
    ],
  },
}
