const couchbase = require('couchbase');

// Couchbase connection
const cluster = new couchbase.Cluster('couchbase://localhost', {
  username: 'username',
  password: 'password'
});
const bucket = cluster.bucket('bucket_name');
const collection = bucket.defaultCollection();

// Insert operation
async function insertRecord() {
  try {
    await collection.insert('document_key', {
      Column1: Value1,
      Column2: Value2,
      Column3: Value3,
      // Add more fields as needed
    });
    console.log('Document inserted');
  } catch (error) {
    console.error('Insert error:', error);
  }
}

// Select operation
async function getRecord() {
  try {
    const result = await collection.get('document_key');
    console.log('Selected document:', result.value);
  } catch (error) {
    console.error('Select error:', error);
  }
}

// Update operation
async function updateRecord() {
  try {
    await collection.upsert('document_key', {
      Column1: Value1,
      Column2: UpdatedValue2,
      Column3: UpdatedValue3,
      // Update more fields as needed
    });
    console.log('Document updated');
  } catch (error) {
    console.error('Update error:', error);
  }
}

// Delete operation
async function deleteRecord() {
  try {
    await collection.remove('document_key');
    console.log('Document deleted');
  } catch (error) {
    console.error('Delete error:', error);
  }
}

// Perform CRUD operations
(async () => {
  await insertRecord();
  await getRecord();
  await updateRecord();
  await getRecord(); // To verify update
  await deleteRecord();
})();
