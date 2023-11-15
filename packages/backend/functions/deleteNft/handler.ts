import { NFTEntity } from "libs/dynamodb-toolbox/nftEntity";

export const main = async (event: { pathParameters: { id: string } }): Promise<any> => {
  console.log({ PK: 'NFT', SK: event.pathParameters.id });
  return NFTEntity.delete({ PK: 'NFT', SK: event.pathParameters.id });
};
