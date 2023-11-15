import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { nftTableDynamoDBWritePolicies } from 'resources/policies';
import { tableName } from 'resources/index';

export const createNft = {
  environment: { NFT_TABLE_NAME: tableName },
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
