const path = require('path');

const {
  NODE_ENV,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
} = process.env;
const env = NODE_ENV || 'production';

const commonConfig = {
  name: 'default',
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/server/migration',
    subscribersDir: 'src/server/subscriber',
  }
};

const productionConfig = {
  ...commonConfig,
  type: 'mysql',
  host: 'localhost',
  database: commonConfig.database || 'nodetech_production',
  entities: ['dist/server/module/**/*.model.js'],
  migrations: ['dist/server/migration/**/*.js'],
  subscribers: ['dist/server/subscriber/**/*.js'],
}

const developmentConfig = {
  ...commonConfig,
  logging: true,
  type: 'mysql',
  host: 'localhost',
  database: commonConfig.database || 'nodetech_development',
  entities: ['src/server/module/**/*.model.ts'],
  migrations: ['src/server/migration/**/*.ts'],
  subscribers: ['src/server/subscriber/**/*.ts'],
};


const testingConfig = {
  ...developmentConfig,
  migrationsRun: false,
  logging: false,
  type: 'mysql',
  database: developmentConfig.database || 'testing',
};

const config = {
  production: productionConfig,
  development: developmentConfig,
  testing: testingConfig,
}

module.exports = config[env] || config.production;
