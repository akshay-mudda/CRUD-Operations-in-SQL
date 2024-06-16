-- Create table
CREATE TABLE IF NOT EXISTS TableName (
    Column1 VARCHAR(255),
    Column2 VARCHAR(255),
    Column3 VARCHAR(255)
);

-- Create or replace stored procedure for inserting a record
CREATE OR REPLACE PROCEDURE InsertRecord(Column1 VARCHAR, Column2 VARCHAR, Column3 VARCHAR)
  RETURNS STRING
  LANGUAGE JAVASCRIPT
  EXECUTE AS CALLER
AS
$$
  var sql_command = `
    INSERT INTO TableName (Column1, Column2, Column3)
    VALUES ('${Column1}', '${Column2}', '${Column3}')
  `;
  
  try {
    var stmt = snowflake.createStatement({sqlText: sql_command});
    stmt.execute();
    return 'Record inserted successfully';
  } catch (err) {
    return 'Error inserting record: ' + err.message;
  }
$$;

-- Create or replace stored procedure for selecting records
CREATE OR REPLACE PROCEDURE SelectRecords()
  RETURNS TABLE (Column1 VARCHAR, Column2 VARCHAR, Column3 VARCHAR)
  LANGUAGE JAVASCRIPT
  EXECUTE AS CALLER
AS
$$
  var sql_command = `
    SELECT Column1, Column2, Column3 FROM TableName
  `;
  
  try {
    var stmt = snowflake.createStatement({sqlText: sql_command});
    var result_set = stmt.execute();
    return result_set;
  } catch (err) {
    return 'Error selecting records: ' + err.message;
  }
$$;

-- Create or replace stored procedure for updating a record
CREATE OR REPLACE PROCEDURE UpdateRecord(Column1 VARCHAR, UpdatedColumn2 VARCHAR, UpdatedColumn3 VARCHAR)
  RETURNS STRING
  LANGUAGE JAVASCRIPT
  EXECUTE AS CALLER
AS
$$
  var sql_command = `
    UPDATE TableName SET Column2 = '${UpdatedColumn2}', Column3 = '${UpdatedColumn3}'
    WHERE Column1 = '${Column1}'
  `;
  
  try {
    var stmt = snowflake.createStatement({sqlText: sql_command});
    stmt.execute();
    return 'Record updated successfully';
  } catch (err) {
    return 'Error updating record: ' + err.message;
  }
$$;

-- Create or replace stored procedure for deleting a record
CREATE OR REPLACE PROCEDURE DeleteRecord(Column1 VARCHAR)
  RETURNS STRING
  LANGUAGE JAVASCRIPT
  EXECUTE AS CALLER
AS
$$
  var sql_command = `
    DELETE FROM TableName WHERE Column1 = '${Column1}'
  `;
  
  try {
    var stmt = snowflake.createStatement({sqlText: sql_command});
    stmt.execute();
    return 'Record deleted successfully';
  } catch (err) {
    return 'Error deleting record: ' + err.message;
  }
$$;

-- Call insert procedure
CALL InsertRecord('Value1', 'Value2', 'Value3');

-- Call select procedure
CALL SelectRecords();

-- Call update procedure
CALL UpdateRecord('Value1', 'UpdatedValue2', 'UpdatedValue3');

-- Call delete procedure
CALL DeleteRecord('Value1');
