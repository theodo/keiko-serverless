import { App, Stack } from '@aws-cdk/core';
import { AttributeType, Table } from '@aws-cdk/aws-dynamodb';

import { CloudFormationTemplate } from '@libs/configHelper/cloudformation';

const app = new App();
const stack = new Stack(app);

const table = new Table(stack, 'NFTtable', {
  partitionKey: { name: 'PK', type: AttributeType.STRING },
  sortKey: { name: 'SK', type: AttributeType.STRING },
});

export const tableName = stack.resolve(table.tableName);

export const resources = app.synth().getStackByName(stack.stackName)
  .template as CloudFormationTemplate;
