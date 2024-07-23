import { PARTITION_KEY, SORT_KEY } from 'resources/dynamoDB';
import { Entity } from 'dynamodb-toolbox';
import { nftTable } from './nftTable';

export const NFTEntity = new Entity({
  name: 'NFT',
  attributes: {
    [PARTITION_KEY]: { type: 'string', partitionKey: true, default: 'NFT' },
    [SORT_KEY]: { type: 'string', hidden: true, sortKey: true },
    id: { type: 'string' },
    positionX: { type: 'number' },
    positionY: { type: 'number' },
    imageIndex: { type: 'number' },
  },
  table: nftTable,
} as const);
