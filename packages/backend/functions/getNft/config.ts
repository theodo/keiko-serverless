import { getHandlerPath } from '@libs/configHelper/getHandlerPath';

export const getNft = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'get',
        path: '/nfts',
      },
    },
  ],
};
