import { getHandlerPath } from '@libs/configHelper/getHandlerPath';

export const logMessage = {
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'get',
        path: '/logMessage',
      },
    },
  ],
};
