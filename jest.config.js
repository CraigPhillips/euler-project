module.exports = {
  testMatch: [
    '**/__tests__/**/*.?(m)js?(x)',
    '**/?(*.)(spec|test).?(m)js?(x)',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node',
    'mjs',
  ],
  transform: {
    '^.+\\.m?js$': 'babel-jest',
  },
};
