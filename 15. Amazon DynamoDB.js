// Import AWS SDK
const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
    region: 'us-west-2', // Your region
    accessKeyId: 'your-access-key-id', // Your access key ID
    secretAccessKey: 'your-secret-access-key' // Your secret access key
});

// Create DynamoDB document client
const docClient = new AWS.DynamoDB.DocumentClient();

// Create table syntax (DynamoDB tables are typically created through AWS Management Console, CLI, or SDK)
const createTable = async () => {
    const params = {
        TableName: 'TableName',
        KeySchema: [
            { AttributeName: 'Column1', KeyType: 'HASH' } // Primary key
        ],
        AttributeDefinitions: [
            { AttributeName: 'Column1', AttributeType: 'S' } // Attribute type (S for string, N for number, etc.)
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    };

    try {
        const data = await new AWS.DynamoDB().createTable(params).promise();
        console.log('Table created:', data);
    } catch (error) {
        console.error('Error creating table:', error);
    }
};

// Insert operation
const insertRecord = async () => {
    const params = {
        TableName: 'TableName',
        Item: {
            Column1: 'Value1',
            Column2: 'Value2',
            Column3: 'Value3'
            // Add more fields as needed
        }
    };

    try {
        const data = await docClient.put(params).promise();
        console.log('Record inserted:', data);
    } catch (error) {
        console.error('Error inserting record:', error);
    }
};

// Select operation
const selectRecord = async () => {
    const params = {
        TableName: 'TableName',
        Key: {
            Column1: 'Value1'
        }
    };

    try {
        const data = await docClient.get(params).promise();
        console.log('Record selected:', data.Item);
    } catch (error) {
        console.error('Error selecting record:', error);
    }
};

// Update operation
const updateRecord = async () => {
    const params = {
        TableName: 'TableName',
        Key: {
            Column1: 'Value1'
        },
        UpdateExpression: 'set Column2 = :val2, Column3 = :val3',
        ExpressionAttributeValues: {
            ':val2': 'UpdatedValue2',
            ':val3': 'UpdatedValue3'
        },
        ReturnValues: 'UPDATED_NEW'
    };

    try {
        const data = await docClient.update(params).promise();
        console.log('Record updated:', data);
    } catch (error) {
        console.error('Error updating record:', error);
    }
};

// Delete operation
const deleteRecord = async () => {
    const params = {
        TableName: 'TableName',
        Key: {
            Column1: 'Value1'
        }
    };

    try {
        const data = await docClient.delete(params).promise();
        console.log('Record deleted:', data);
    } catch (error) {
        console.error('Error deleting record:', error);
    }
};

// Call functions to perform CRUD operations
const runCRUDOperations = async () => {
    await createTable();
    await insertRecord();
    await selectRecord();
    await updateRecord();
    await deleteRecord();
};

runCRUDOperations();
