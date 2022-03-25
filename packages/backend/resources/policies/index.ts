import { tableArn } from "..";

export const nftTableDynamoDBWritePolicies = {
  Effect: 'Allow',
  Resource: [tableArn],
  Action: ['dynamodb:PutItem', 'dynamodb:UpdateItem'],
}

export const nftTableDynamoDBDeletePolicies = {
  Effect: 'Allow',
  Resource: [tableArn],
  Action: ['dynamodb:DeleteItem'],
}

export const nftTableDynamoDBReadPolicies = {
  Effect: 'Allow',
  Resource: [tableArn],
  Action: ['dynamodb:GetItem', 'dynamodb:Query'],
}
