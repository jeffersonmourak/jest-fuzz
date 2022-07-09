/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '../src/'),
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
};
