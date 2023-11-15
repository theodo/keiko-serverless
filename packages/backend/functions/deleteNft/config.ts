import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { tableName } from 'resources';
import { nftTableDynamoDBDeletePolicies } from 'resources/policies';

export const deleteNft = {
  environment: { NFT_TABLE_NAME: tableName },
  iamRoleStatements: [nftTableDynamoDBDeletePolicies],
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'delete',
        path: '/nfts/{id}',
      },
    },
  ],
};
