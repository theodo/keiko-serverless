import { NFTEntity } from "@libs/dynamodb-toolbox/nftEntity";

export const main = async (): Promise<string> => {
  return NFTEntity.query("Nft");
};
