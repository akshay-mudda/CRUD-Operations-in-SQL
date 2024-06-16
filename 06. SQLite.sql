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

-- Trigger for insert
CREATE TRIGGER InsertRecord
AFTER INSERT ON TableName
BEGIN
    -- Insert logic here
END;

-- Trigger for update
CREATE TRIGGER UpdateRecord
AFTER UPDATE ON TableName
BEGIN
    -- Update logic here
END;

-- Trigger for delete
CREATE TRIGGER DeleteRecord
AFTER DELETE ON TableName
BEGIN
    -- Delete logic here
END;

-- Call to insert a record
INSERT INTO TableName (Column1, Column2, Column3, ...)
VALUES (Value1, Value2, Value3, ...);

-- Call to select a record
SELECT Column1, Column2, Column3, ...
FROM TableName
WHERE Condition;

-- Call to update a record
UPDATE TableName
SET Column1 = Value1, Column2 = Value2, ...
WHERE Condition;

-- Call to delete a record
DELETE FROM TableName
WHERE Condition;
