const cassandra = require('cassandra-driver');

// Cassandra connection
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'mykeyspace' });

// Connect to Cassandra
client.connect()
  .then(() => {
    console.log('Connected to Cassandra');

    // Create table syntax
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS TableName (
        Column1 DataType PRIMARY KEY,
        Column2 DataType,
        Column3 DataType
      )`;

    // Insert operation
    const insertQuery = `
      INSERT INTO TableName (Column1, Column2, Column3)
      VALUES (?, ?, ?)`;
    const paramsInsert = [Value1, Value2, Value3];

    // Select operation
    const selectQuery = `
      SELECT * FROM TableName
      WHERE Column1 = ?`;
    const paramsSelect = [Value1];

    // Update operation
    const updateQuery = `
      UPDATE TableName
      SET Column2 = ?, Column3 = ?
      WHERE Column1 = ?`;
    const paramsUpdate = [UpdatedValue2, UpdatedValue3, Value1];

    // Delete operation
    const deleteQuery = `
      DELETE FROM TableName
      WHERE Column1 = ?`;
    const paramsDelete = [Value1];

    // Execute queries
    return Promise.all([
      client.execute(createTableQuery),
      client.execute(insertQuery, paramsInsert),
      client.execute(selectQuery, paramsSelect),
      client.execute(updateQuery, paramsUpdate),
      client.execute(deleteQuery, paramsDelete)
    ]);
  })
  .then(results => {
    console.log('Table created:', results[0]);
    console.log('Row inserted:', results[1]);
    console.log('Selected rows:', results[2].rows);
    console.log('Row updated:', results[3]);
    console.log('Row deleted:', results[4]);
  })
  .catch(error => console.error('Error:', error))
  .finally(() => client.shutdown());
