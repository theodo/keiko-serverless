import { getHandlerPath } from '@libs/configHelper/getHandlerPath';

const config = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'get',
        path: '/health',
      },
    },
  ],
};

export default config;
