import { App, Stack } from '@aws-cdk/core';
import { AttributeType, Table } from '@aws-cdk/aws-dynamodb';

import { CloudFormationTemplate } from '@libs/configHelper/cloudformation';
import { PARTITION_KEY, SORT_KEY } from './dynamoDB';

const app = new App();
const stack = new Stack(app);

const table = new Table(stack, 'NFTtable', {
  partitionKey: { name: PARTITION_KEY, type: AttributeType.STRING },
  sortKey: { name: SORT_KEY, type: AttributeType.STRING },
});

export const tableArn = stack.resolve(table.tableArn);
export const tableName = stack.resolve(table.tableName);

export const resources = app.synth().getStackByName(stack.stackName)
  .template as CloudFormationTemplate;
