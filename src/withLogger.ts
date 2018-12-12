import * as Sentry from '@sentry/node';
import { withLoggerType } from "../globals";
Sentry.init({ dsn: process.env.SENTRY_DSN, environment: process.env.STAGE });


const withLogger: withLoggerType = (handler => async (event) => {
  try {
    return await handler(event);
  }
  catch (err) {
      await Sentry.getCurrentHub()
        .getClient()
        .captureException(err)
        .then((error) => {
          // request status
          throw error
        })
    }
});

export { withLogger }