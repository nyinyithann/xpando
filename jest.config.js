/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {

  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  testEnvironment: 'node',
  testRegex: '(/(tests/more|tests/specs.list)/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
};
