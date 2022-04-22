import { tableArn } from '..';

export const nftTableDynamoDBReadPolicies = {
  Effect: 'Allow',
  Resource: [tableArn],
  Action: ['dynamodb:GetItem', 'dynamodb:Query'],
};

export const nftTableDynamoDBWritePolicies = {
  Effect: 'Allow',
  Resource: [tableArn],
  Action: ['dynamodb:PutItem', 'dynamodb:Query'],
};

export const nftTableDynamoDBDeletePolicies = {
  Effect: 'Allow',
  Resource: [tableArn],
  Action: ['dynamodb:DeleteItem'],
}