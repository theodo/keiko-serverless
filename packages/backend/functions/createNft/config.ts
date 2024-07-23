import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { nftTableDynamoDBWritePolicies } from 'resources/policies';

export const createNft = {
  iamRoleStatements: [nftTableDynamoDBWritePolicies],
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
