import { nftEntity } from "@libs/dynamodb-toolbox/nftEntity";
import { SORT_KEY } from "@resources/dynamoDB";
import crypto from "crypto";

export const main = async (): Promise<string> => {
  await nftEntity.put({ [SORT_KEY]: crypto.randomUUID() });

  return 'ok';
};
