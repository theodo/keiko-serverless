import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import crypto from 'crypto';

const client = new DynamoDBClient({ region: 'eu-west-1' });

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const main = async (): Promise<any> => {
  const id = crypto.randomUUID();
  const params = {
    TableName: process.env.NFT_TABLE_NAME,
    Item: {
      PK: { S: 'NFT' },
      SK: { S: id },
      positionX: { S: randomIntFromInterval(5, 90).toString() },
      positionY: { S: randomIntFromInterval(10, 90).toString() },
      imageIndex: { S: Math.floor(Math.random() * 5).toString() },
    },
  };
  await client.send(new PutItemCommand(params));
};
