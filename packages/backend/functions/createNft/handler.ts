import { NFTEntity } from '@libs/dynamodb-toolbox/nftEntity';
import crypto from 'crypto';

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const main = async (): Promise<any> => {
  const id = crypto.randomUUID();

  const nftItem = {
    id,
    positionX: randomIntFromInterval(5, 90),
    positionY: randomIntFromInterval(10, 90),
    imageIndex: Math.floor(Math.random() * 5),
  };

  await NFTEntity.put(nftItem);

  return nftItem;
};
