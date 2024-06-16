-- Create table syntax
CREATE TABLE TableName (
    Column1 DataType PRIMARY KEY,
    Column2 DataType,
    Column3 DataType,
    ...
);

-- Insert operation
INSERT INTO TableName (Column1, Column2, Column3, ...)
VALUES (Value1, Value2, Value3, ...);

-- Select operation
SELECT Column1, Column2, Column3, ...
FROM TableName
WHERE Condition;

-- Update operation
UPDATE TableName
SET Column1 = Value1, Column2 = Value2, ...
WHERE Condition;

-- Delete operation
DELETE FROM TableName
WHERE Condition;

-- Stored procedure for insert
CREATE OR REPLACE PROCEDURE InsertRecord(
    IN Param1 DataType,
    IN Param2 DataType,
    IN Param3 DataType,
    ...
)
BEGIN
    INSERT INTO TableName (Column1, Column2, Column3, ...)
    VALUES (Param1, Param2, Param3, ...);
END;

-- Stored procedure for select
CREATE OR REPLACE PROCEDURE GetRecord(
    IN Param1 DataType
)
BEGIN
    SELECT Column1, Column2, Column3, ...
    FROM TableName
    WHERE Column1 = Param1;
END;

-- Stored procedure for update
CREATE OR REPLACE PROCEDURE UpdateRecord(
    IN Param1 DataType,
    IN Param2 DataType,
    ...
)
BEGIN
    UPDATE TableName
    SET Column2 = Param2, ...
    WHERE Column1 = Param1;
END;

-- Stored procedure for delete
CREATE OR REPLACE PROCEDURE DeleteRecord(
    IN Param1 DataType
)
BEGIN
    DELETE FROM TableName
    WHERE Column1 = Param1;
END;

-- Call to insert a record
CALL InsertRecord(Value1, Value2, Value3, ...);

-- Call to select a record
CALL GetRecord(Value1);

-- Call to update a record
CALL UpdateRecord(Value1, Value2, ...);

-- Call to delete a record
CALL DeleteRecord(Value1);
