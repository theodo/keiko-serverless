import { getHandlerPath } from '@libs/configHelper/getHandlerPath';
import { nftTableDynamoDBReadPolicies } from '@resources/policies';

export const getNft = {
  environment: {},
  iamRoleStatements: [nftTableDynamoDBReadPolicies],
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
