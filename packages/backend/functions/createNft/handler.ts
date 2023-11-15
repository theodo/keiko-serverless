import { randomUUID } from "crypto";
import { NFTEntity } from "libs/dynamodb-toolbox/nftEntity";

const randomNumberBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const main = async (): Promise<any> => {
  const id = randomUUID();

  const item = {
    PK: 'NFT',
    SK: id,
    id,
    positionX: randomNumberBetween(20, 100),
    positionY: randomNumberBetween(20, 100),
    imageIndex: randomNumberBetween(0, 4),
  };

  await NFTEntity.put(item);

  return item;
};
