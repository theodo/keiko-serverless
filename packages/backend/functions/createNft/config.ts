import { getHandlerPath } from '@libs/configHelper/getHandlerPath';

const config = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'post',
        path: '/nfts',
      },
    },
  ],
};

export default config;
