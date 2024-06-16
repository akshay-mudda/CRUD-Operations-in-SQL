//npm install hbase

const HBase = require('hbase');

// Configure HBase client
const client = HBase({
  host: 'localhost', // HBase server
  port: 8080         // HBase Thrift server port
});

// Table and column family
const tableName = 'TableName';
const columnFamily = 'cf';

// Create table
const createTable = () => {
  client.table(tableName).create({
    ColumnSchema: [{ name: columnFamily }]
  }, (err, success) => {
    if (err) console.error('Error creating table:', err);
    else console.log('Table created:', success);
  });
};

// Insert operation
const insertRecord = () => {
  client.table(tableName).row('row1').put([
    { column: `${columnFamily}:Column1`, $: 'Value1' },
    { column: `${columnFamily}:Column2`, $: 'Value2' },
    { column: `${columnFamily}:Column3`, $: 'Value3' }
  ], (err, success) => {
    if (err) console.error('Error inserting row:', err);
    else console.log('Row inserted:', success);
  });
};

// Select operation
const selectRecord = () => {
  client.table(tableName).row('row1').get((err, cells) => {
    if (err) console.error('Error selecting row:', err);
    else console
