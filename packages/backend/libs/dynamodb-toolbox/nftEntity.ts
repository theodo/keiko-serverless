import { PARTITION_KEY } from '@resources/dynamoDB';
import { Entity } from 'dynamodb-toolbox';
import { nftTable } from './nftTable';

export const NFTEntity = new Entity({
  name: 'NFT',
  attributes: {
    [PARTITION_KEY]: { type: 'string', partitionKey: true, default: 'Nft' },
    id: { type: 'string', sortKey: true },
    positionX: { type: 'number' },
    positionY: { type: 'number' },
    src: { type: 'string' },
  },
  table: nftTable,
} as const);
