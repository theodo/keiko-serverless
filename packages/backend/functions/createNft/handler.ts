import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import crypto from 'crypto'

const client = new DynamoDBClient({ region: process.env.REGION });

const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export const main = async (event: any): Promise<any> => {

    const id = crypto.randomUUID();
    const item = {
        PK: { S: 'Nft' },
        SK: { S: id },
        id: { S: id },
        positionX: { N: randomIntFromInterval(5, 90).toString() },
        positionY: { N: randomIntFromInterval(10, 90).toString() },
        imageIndex: { N: randomIntFromInterval(0, 4).toString() },
    }

    const input = {
        TableName: process.env.NFT_TABLE_NAME,
        Item: item
    }

    const command = new PutItemCommand(input);
    const response = await client.send(command);
    console.log("createNft has been successfully executed:", response);

    return event;
};
