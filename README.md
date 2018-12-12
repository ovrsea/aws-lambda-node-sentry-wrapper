# aws-lambda-node-sentry-wrapper

This package is a wrapper for Node 8 lambda functions on AWS.

It catches errors in Sentry and waits that the promise is resolved before returning. It avoids the process to be frozen 
by aws before the error is reported in Sentry.


The DSN must be provided via `process.env.SENTRY_DSN`, for example using serverless env variables.

### Usage

Given a function:

```


``` 

### Customization

You can use the the Sentry instance (second argument of the handler) to customize your handler.

