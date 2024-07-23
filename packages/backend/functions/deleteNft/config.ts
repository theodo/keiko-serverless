import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { nftTableDynamoDBDeletePolicies } from 'resources/policies';

export const deleteNft = {
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
