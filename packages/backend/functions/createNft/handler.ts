import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import crypto from 'crypto';

const client = new DynamoDBClient({ region: 'eu-west-1' });

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const main = async (): Promise<any> => {
  const id = crypto.randomUUID();

  const positionX = randomIntFromInterval(5, 90);
  const positionY = randomIntFromInterval(10, 90);
  const imageIndex = Math.floor(Math.random() * 5);

  const params = {
    TableName: process.env.NFT_TABLE_NAME,
    Item: {
      PK: { S: 'Nft' },
      SK: { S: id },
      id: { S: id },
      positionX: { S: positionX.toString() },
      positionY: { S: positionY.toString() },
      imageIndex: { S: imageIndex.toString() },
    },
  };

  await client.send(new PutItemCommand(params));

  return {
    id,
    positionX,
    positionY,
    imageIndex,
  };
};
