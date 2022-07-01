import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { nftTableDynamoDBWritePolicies } from 'resources/policies';

export const createNft = {
    handler: getHandlerPath(__dirname),
    iamRoleStatements: [nftTableDynamoDBWritePolicies],
    events: [
        {
            httpApi: {
                method: 'post',
                path: '/nfts',
            },
        },
    ],
};
