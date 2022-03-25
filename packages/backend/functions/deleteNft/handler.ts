import { NFT } from "@libs/dynamodb-toolbox/nftEntity";
import { PARTITION_KEY, SORT_KEY } from "@resources/dynamoDB";

export const main = async (event: { pathParameters: { id: string }}): Promise<string> => {
  const nftToDelete = {
    [PARTITION_KEY]: "Nft",
    [SORT_KEY]: event.pathParameters.id,
  }
  return NFT.delete(nftToDelete);
};
