import { NFTEntity } from 'libs/dynamodb-toolbox/nftEntity';

const getById = async (id: string) => {
  if (id === "") {
    return {};
  }

  const { Item } = await NFTEntity.get({ PK: 'NFT', SK: id });

  if (!Item) return {};

  return Item;
}

const getAll = async () => {
  const { Items } = await NFTEntity.query('NFT');

  if (!Items) return [];

  return Items;
}


export const main = async (event: { pathParameters: { id?: string } }): Promise<any> => {
  if (event.pathParameters?.id !== undefined) {
    return getById(event.pathParameters.id);
  }

  return getAll();
};
