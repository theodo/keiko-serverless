import { NFTEntity } from "@libs/dynamodb-toolbox/nftEntity";

export const main = async (): Promise<string> => {
  const { Items = [] } = await NFTEntity.query("Nft");

  return Items;
};
