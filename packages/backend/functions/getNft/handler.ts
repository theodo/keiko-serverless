import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDBClient({ region: 'eu-west-1' });

export const main = async (): Promise<any> => {
  const params = {
    TableName: process.env.NFT_TABLE_NAME,
    ExpressionAttributeValues: marshall({ ':pk': 'NFT' }),
    KeyConditionExpression: 'PK = :pk ',
  };

  const { Items } = await client.send(new QueryCommand(params));

  if (!Items) return [];

  return (Items as any).map(unmarshall);
};
