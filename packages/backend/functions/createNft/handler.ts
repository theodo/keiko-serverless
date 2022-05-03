import { randomUUID } from 'crypto';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';

const intervalRandInt = (min: number, max: number) =>
  Math.floor((max - min + 1) * Math.random() + min);

const client = new DynamoDBClient({ region: 'eu-west-1' });

export const main = async (): Promise<any> => {
  const id = randomUUID();

  const newNft = {
    id,
    positionX: intervalRandInt(5, 90),
    positionY: intervalRandInt(10, 90),
    imageIndex: intervalRandInt(0, 4),
  };

  const Item = {
    PK: { S: 'Nft' },
    SK: { S: id },
    id: { S: id },
    positionX: { N: newNft.positionX.toString() },
    positionY: { N: newNft.positionY.toString() },
    imageIndex: { N: newNft.imageIndex.toString() },
  };
  const params = {
    TableName: process.env.NFT_TABLE_NAME,
    Item,
  };
  await client.send(new PutItemCommand(params));
  return newNft;
};
