//npm install @google-cloud/firestore

const { Firestore } = require('@google-cloud/firestore');

// Create a new Firestore client
const firestore = new Firestore();

const collectionName = 'my_collection';

// Function to create collection
const createCollection = async () => {
  try {
    await firestore.collection(collectionName).doc(); // Create collection by adding a dummy document
    console.log('Collection created');
  } catch (err) {
    console.error('Error creating collection:', err);
  }
};

// Insert operation
const insertRecord = async () => {
  try {
    await firestore.collection(collectionName).add({
      Column1: 'Value1',
      Column2: 'Value2',
      Column3: 'Value3'
    });
    console.log('Document inserted');
  } catch (err) {
    console.error('Error inserting document:', err);
  }
};

// Select operation
const selectRecord = async () => {
  try {
    const snapshot = await firestore.collection(collectionName).get();
    snapshot.forEach(doc => {
      console.log('Selected document:', doc.id, '=>', doc.data());
    });
  } catch (err) {
    console.error('Error selecting documents:', err);
  }
};

// Update operation
const updateRecord = async () => {
  try {
    const snapshot = await firestore.collection(collectionName).get();
    snapshot.forEach(async doc => {
      await firestore.collection(collectionName).doc(doc.id).update({
        Column2: 'UpdatedValue2',
        Column3: 'UpdatedValue3'
      });
    });
    console.log('Documents updated');
  } catch (err) {
    console.error('Error updating documents:', err);
  }
};

// Delete operation
const deleteRecord = async () => {
  try {
    const snapshot = await firestore.collection(collectionName).get();
    snapshot.forEach(async doc => {
      await firestore.collection(collectionName).doc(doc.id).delete();
    });
    console.log('Documents deleted');
  } catch (err) {
    console.error('Error deleting documents:', err);
  }
};

// Run CRUD operations
const runCRUDOperations = async () => {
  await createCollection();
  await insertRecord();
  await selectRecord();
  await updateRecord();
  await deleteRecord();
};

runCRUDOperations();
