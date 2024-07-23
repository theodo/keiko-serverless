import { randomUUID } from 'crypto';
import { NFTEntity } from 'libs/dynamodb-toolbox/nftEntity';
import { SORT_KEY } from 'resources/dynamoDB';

export const main = async (): Promise<any> => {
  const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const id = randomUUID();

  console.log('Yeah! You created a new NFT!');

  const positionX = randomIntFromInterval(5, 90);
  const positionY = randomIntFromInterval(10, 90);
  const imageIndex = Math.floor(Math.random() * 5);

  const Item = {
    [SORT_KEY]: id,
    id: id,
    positionX: positionX,
    positionY: positionY,
    imageIndex: imageIndex,
  };

  return await NFTEntity.put(Item);

  return {
    id: id,
    positionX: positionX,
    positionY: positionY,
    imageIndex: imageIndex,
  };
};
