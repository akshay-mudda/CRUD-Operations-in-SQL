const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'your-tencentdb-host', // TencentDB hostname
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});

// Function to execute SQL query
const executeQuery = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Create table
const createTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS TableName (
      Column1 datatype,
      Column2 datatype,
      Column3 datatype
    )
  `;
  try {
    await executeQuery(sql);
    console.log('Table created');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

// Insert operation
const insertRecord = async () => {
  const sql = `
    INSERT INTO TableName (Column1, Column2, Column3) VALUES (?, ?, ?)
  `;
  const values = ['Value1', 'Value2', 'Value3'];
  try {
    await executeQuery(sql, values);
    console.log('Record inserted');
  } catch (error) {
    console.error('Error inserting record:', error);
  }
};

// Select operation
const selectRecord = async () => {
  const sql = `
    SELECT * FROM TableName WHERE Column1 = ?
  `;
  const values = ['Value1'];
  try {
    const rows = await executeQuery(sql, values);
    console.log('Selected rows:', rows);
  } catch (error) {
    console.error('Error selecting records:', error);
  }
};

// Update operation
const updateRecord = async () => {
  const sql = `
    UPDATE TableName SET Column2 = ?, Column3 = ? WHERE Column1 = ?
  `;
  const values = ['UpdatedValue2', 'UpdatedValue3', 'Value1'];
  try {
    await executeQuery(sql, values);
    console.log('Record updated');
  } catch (error) {
    console.error('Error updating record:', error);
  }
};

// Delete operation
const deleteRecord = async () => {
  const sql = `
    DELETE FROM TableName WHERE Column1 = ?
  `;
  const values = ['Value1'];
  try {
    await executeQuery(sql, values);
    console.log('Record deleted');
  } catch (error) {
    console.error('Error deleting record:', error);
  }
};

// Run CRUD operations
const runCRUDOperations = async () => {
  await createTable();
  await insertRecord();
  await selectRecord();
  await updateRecord();
  await deleteRecord();
  pool.end(); // Close connection pool
};

runCRUDOperations();
