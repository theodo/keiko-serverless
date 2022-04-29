import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { nftTableDynamoDBReadPolicies } from 'resources/policies';
import { tableName } from 'resources/index';

export const getNft = {
  environment: { NFT_TABLE_NAME: tableName },
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
