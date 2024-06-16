//npm install nano

const nano = require('nano')('http://localhost:5984'); // CouchDB connection URL

const dbName = 'mydatabase';

// Create database
const createDatabase = async () => {
  try {
    await nano.db.create(dbName);
    console.log('Database created');
  } catch (err) {
    console.error('Error creating database:', err.message);
  }
};

const db = nano.use(dbName);

// Insert operation
const insertRecord = async () => {
  try {
    const response = await db.insert({
      _id: 'document_id', // Document ID
      Column1: 'Value1',
      Column2: 'Value2',
      Column3: 'Value3'
    });
    console.log('Document inserted:', response);
  } catch (err) {
    console.error('Error inserting document:', err.message);
  }
};

// Select operation
const selectRecord = async () => {
  try {
    const document = await db.get('document_id'); // Document ID
    console.log('Selected document:', document);
  } catch (err) {
    console.error('Error selecting document:', err.message);
  }
};

// Update operation
const updateRecord = async () => {
  try {
    const document = await db.get('document_id'); // Document ID
    document.Column2 = 'UpdatedValue2';
    document.Column3 = 'UpdatedValue3';

    const response = await db.insert(document);
    console.log('Document updated:', response);
  } catch (err) {
    console.error('Error updating document:', err.message);
  }
};

// Delete operation
const deleteRecord = async () => {
  try {
    const document = await db.get('document_id'); // Document ID
    const response = await db.destroy(document._id, document._rev);
    console.log('Document deleted:', response);
  } catch (err) {
    console.error('Error deleting document:', err.message);
  }
};

// Run CRUD operations
const runCRUDOperations = async () => {
  await createDatabase();
  await insertRecord();
  await selectRecord();
  await updateRecord();
  await deleteRecord();
};

runCRUDOperations();
