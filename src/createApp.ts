import express from 'express';
import { urlencoded, json } from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import routes from './routes';
import { createConnection } from 'typeorm';

const createApp = async () => {
  const app = express();

  await createConnection();

  // App settings
  app.disable('x-powered-by');

  // Global middleware
  app.use(compression());
  app.use(cookieParser());
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // Mount routes
  app.use(routes);

  return app;
};

export default createApp;