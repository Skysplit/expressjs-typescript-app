import 'dotenv/config';
import errorhandler from 'errorhandler';
import debug from 'debug';
import app from '@app/app';

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler());
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  const info = debug('app:info');
  info('App is running on port %d', port);
  info('App environment is %s', process.env.NODE_ENV);
});
