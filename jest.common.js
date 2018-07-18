module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.build.json',
      skipBabel: true,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.tsx?$': './node_modules/ts-jest/preprocessor.js',
  },
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/src/$1',
    '@server/(.*)$': '<rootDir>/src/server/$1',
    '@client/(.*)$': '<rootDir>/src/client/$1',
    '@next/(.*)$': '<rootDir>/src/next/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.ts',
    '!src/{bootstrap,next}/**/*',
    '!src/**/__tests__/**/*',
    '!src/**/*.d.ts',
  ],
  coverageReporters: ['lcov', 'json'],
};
