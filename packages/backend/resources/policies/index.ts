import { tableArn } from '..';

export const nftTableDynamoDBReadPolicies = {
  Effect: 'Allow',
  Resource: [tableArn],
  Action: ['dynamodb:GetItem', 'dynamodb:Query'],
};
