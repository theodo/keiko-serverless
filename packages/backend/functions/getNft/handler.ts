import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDBClient({ region: 'eu-west-1' });

export const main = async (): Promise<any> => {
  const params = {
    TableName: process.env.NFT_TABLE_NAME,
    ExpressionAttributeValues: {
      ':pk': { S: 'Nft' },
    },
    KeyConditionExpression: 'PK = :pk ',
  };

  const { Items = [] as any } = await client.send(new QueryCommand(params));

  return Items.map(unmarshall);
};
