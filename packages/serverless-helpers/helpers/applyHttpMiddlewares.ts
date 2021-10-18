import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import jsonValidator from '@middy/validator';
import { Handler } from 'aws-lambda';
import { JSONSchema } from 'json-schema-to-ts';

interface Options {
  inputSchema?: JSONSchema;
  outputSchema?: JSONSchema;
}

export const applyHttpMiddlewares = <Event, Result>(
  handler: Handler<Event, Result>,
  { inputSchema }: Options,
): middy.MiddyfiedHandler<Event, Result> => {
  const middyfiedHandler = middy(handler);

  if (inputSchema !== undefined) {
    middyfiedHandler.use(jsonBodyParser());
    middyfiedHandler.use(jsonValidator({ inputSchema }));
  }

  middyfiedHandler.use(httpErrorHandler());

  return middyfiedHandler;
};