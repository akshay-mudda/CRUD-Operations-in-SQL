//npm install neo4j-driver

const neo4j = require('neo4j-driver');

// Configure Neo4j client
const driver = neo4j.driver(
  'bolt://localhost:7687', // Neo4j server URL
  neo4j.auth.basic('username', 'password') // Replace with your Neo4j username and password
);

const session = driver.session();

// Create node syntax
const createNode = async () => {
  try {
    await session.run(
      'CREATE (n:NodeLabel {Column1: $value1, Column2: $value2, Column3: $value3})',
      {
        value1: 'Value1',
        value2: 'Value2',
        value3: 'Value3'
      }
    );
    console.log('Node created');
  } catch (err) {
    console.error('Error creating node:', err);
  }
};

// Read node syntax
const readNode = async () => {
  try {
    const result = await session.run(
      'MATCH (n:NodeLabel {Column1: $value1}) RETURN n',
      { value1: 'Value1' }
    );
    result.records.forEach(record => {
      console.log('Node selected:', record.get('n').properties);
    });
  } catch (err) {
    console.error('Error reading node:', err);
  }
};

// Update node syntax
const updateNode = async () => {
  try {
    await session.run(
      'MATCH (n:NodeLabel {Column1: $value1}) SET n.Column2 = $value2, n.Column3 = $value3',
      {
        value1: 'Value1',
        value2: 'UpdatedValue2',
        value3: 'UpdatedValue3'
      }
    );
    console.log('Node updated');
  } catch (err) {
    console.error('Error updating node:', err);
  }
};

// Delete node syntax
const deleteNode = async () => {
  try {
    await session.run(
      'MATCH (n:NodeLabel {Column1: $value1}) DELETE n',
      { value1: 'Value1' }
    );
    console.log('Node deleted');
  } catch (err) {
    console.error('Error deleting node:', err);
  }
};

// Run CRUD operations
const runCRUDOperations = async () => {
  await createNode();
  await readNode();
  await updateNode();
  await deleteNode();
  await session.close();
  await driver.close();
};

runCRUDOperations();
