import { PARTITION_KEY, SORT_KEY } from '@resources/dynamoDB';
import { Entity } from 'dynamodb-toolbox';
import { nftTable } from './nftTable';

export const nftEntity = new Entity({
  name: 'ClientEventEntity',
  attributes: {
    [PARTITION_KEY]: { type: 'string', partitionKey: true, default: 'Nft' },
    [SORT_KEY]: { type: 'string', sortKey: true },
  },
  table: nftTable,
} as const);
