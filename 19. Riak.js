//npm install riak

const riak = require('riak');

// Configure Riak client
const client = new riak.Client({
  host: 'localhost', // Riak server hostname
  port: 8087          // Riak Protocol Buffers port (8087 by default)
});

const bucketName = 'my_bucket';

// Create bucket
const createBucket = async () => {
  try {
    await client.createBucket({ bucket: bucketName });
    console.log('Bucket created');
  } catch (err) {
    console.error('Error creating bucket:', err);
  }
};

// Insert operation
const insertRecord = async () => {
  try {
    await client.put({
      bucket: bucketName,
      key: 'document_key',
      content: {
        Column1: 'Value1',
        Column2: 'Value2',
        Column3: 'Value3'
      }
    });
    console.log('Record inserted');
  } catch (err) {
    console.error('Error inserting record:', err);
  }
};

// Select operation
const selectRecord = async () => {
  try {
    const { content } = await client.get({
      bucket: bucketName,
      key: 'document_key'
    });
    console.log('Selected record:', content);
  } catch (err) {
    console.error('Error selecting record:', err);
  }
};

// Update operation
const updateRecord = async () => {
  try {
    await client.put({
      bucket: bucketName,
      key: 'document_key',
      content: {
        Column1: 'UpdatedValue1',
        Column2: 'UpdatedValue2',
        Column3: 'UpdatedValue3'
      }
    });
    console.log('Record updated');
  } catch (err) {
    console.error('Error updating record:', err);
  }
};

// Delete operation
const deleteRecord = async () => {
  try {
    await client.del({ bucket: bucketName, key: 'document_key' });
    console.log('Record deleted');
  } catch (err) {
    console.error('Error deleting record:', err);
  }
};

// Run CRUD operations
const runCRUDOperations = async () => {
  await createBucket();
  await insertRecord();
  await selectRecord();
  await updateRecord();
  await deleteRecord();
};

runCRUDOperations();
