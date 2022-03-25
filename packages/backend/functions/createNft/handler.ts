import { NFT } from "@libs/dynamodb-toolbox/nftEntity";
import { SORT_KEY } from "@resources/dynamoDB";
import crypto from "crypto";

export const main = async (): Promise<string> => {
  await NFT.put({
    [SORT_KEY]: crypto.randomUUID(),
    positionX: 10,
    positionY: 2.1,
    src: "1.img",
  });

  return 'ok';
};
