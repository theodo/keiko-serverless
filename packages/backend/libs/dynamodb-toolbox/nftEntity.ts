import { PARTITION_KEY, SORT_KEY } from 'resources/dynamoDB';
import { Entity } from 'dynamodb-toolbox';
import { nftTable } from './nftTable';

export const NFTEntity = new Entity(
  {
    name: 'NFT',
    attributes: {
      [PARTITION_KEY]: { type: 'string', partitionKey: true, default: 'NFT' },
      [SORT_KEY]: { type: 'string', sortKey: true },
      id: { type: 'string', required: true },
      positionX: { type: 'number', required: true },
      positionY: { type: 'number', required: true },
      imageIndex: { type: 'number', required: true },
    },
    table: nftTable,
  } as const
);