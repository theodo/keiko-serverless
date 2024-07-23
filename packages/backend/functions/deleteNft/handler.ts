import { NFTEntity } from 'libs/dynamodb-toolbox/nftEntity';
import { SORT_KEY } from 'resources/dynamoDB';

export const main = async (event: {
  pathParameters: { id: string };
}): Promise<any> => {
  return await NFTEntity.delete({ [SORT_KEY]: event.pathParameters.id });
};
