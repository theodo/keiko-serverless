import { NFT } from "@libs/dynamodb-toolbox/nftEntity";

export const main = async (): Promise<string> => {
  return NFT.query("Nft");
};
