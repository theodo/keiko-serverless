import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';

import { PARTITION_KEY, SORT_KEY } from './dynamoDB';

const app = new App();
const stack = new Stack(app);

const table = new Table(stack, 'NFTtable', {
  partitionKey: { name: PARTITION_KEY, type: AttributeType.STRING },
  sortKey: { name: SORT_KEY, type: AttributeType.STRING },
  billingMode: BillingMode.PAY_PER_REQUEST,
  removalPolicy: RemovalPolicy.DESTROY,
});

export const tableArn = stack.resolve(table.tableArn);
export const tableName = stack.resolve(table.tableName);

/**
 * Do not keep 'Rules' nor 'Parameters' to avoid the following errors (without resorting to cdk bridge plugin):
 *   Error: Invalid configuration encountered
 *     at 'resources': unrecognized property 'Rules'
 *   Error:
 *   Unable to fetch parameters [/cdk-bootstrap/hnb659fds/version] from parameter store for this account.
 */
export const resources = { Resources: app.synth().getStackByName(stack.stackName).template.Resources };
