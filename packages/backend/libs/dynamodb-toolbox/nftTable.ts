import { Table } from 'dynamodb-toolbox';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import { PARTITION_KEY, SORT_KEY } from 'resources/dynamoDB';

const dynamoDBClient = new DynamoDBClient({ region: 'eu-west-1' });

const documentClient = DynamoDBDocumentClient.from(dynamoDBClient, {
  marshallOptions: {
    convertEmptyValues: false,
  },
});

export const nftTable = new Table({
  name: process.env.NFT_TABLE_NAME ?? 'MISSING_NFT_TABLE',
  partitionKey: PARTITION_KEY,
  sortKey: SORT_KEY,
  DocumentClient: documentClient,
});
