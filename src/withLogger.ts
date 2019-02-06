import * as Sentry from '@sentry/node';
import { withLoggerType } from '../globals';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.STAGE || 'test',
});

const withLogger: withLoggerType = handler => async event => {
  console.log(JSON.stringify(event, null, 2))
  try {
    return await handler(event, Sentry);
  } catch (err) {
    try {
      await Sentry.getCurrentHub()
        .getClient()
        .captureException(err);
    } catch (sentryError) {
      // well, in this case, Sentry failed.
      console.warn('Sentry failed:', sentryError);
    }
    throw err;
  }
};

export { withLogger };
