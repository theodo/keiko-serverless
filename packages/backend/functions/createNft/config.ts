import { getHandlerPath } from '@libs/configHelper/getHandlerPath';

export const createNft = {
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
