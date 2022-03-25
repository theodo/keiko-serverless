import { NFTEntity } from "@libs/dynamodb-toolbox/nftEntity";

export const main = async (event: { pathParameters: { id: string }}): Promise<string> => {
  return NFTEntity.delete({ id: event.pathParameters.id });
};
