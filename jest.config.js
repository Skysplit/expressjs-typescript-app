module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    "@app/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.tsx?$': './node_modules/ts-jest/preprocessor.js',
  },
  testMatch: [
    '**/*.(test|spec).(ts|js)',
  ],
  testEnvironment: 'node',
}
