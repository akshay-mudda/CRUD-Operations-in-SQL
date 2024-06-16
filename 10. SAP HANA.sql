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

-- Procedure for insert
CREATE PROCEDURE InsertRecord (
    IN Param1 DataType,
    IN Param2 DataType,
    IN Param3 DataType,
    ...
)
LANGUAGE SQLSCRIPT AS
BEGIN
    INSERT INTO TableName (Column1, Column2, Column3, ...)
    VALUES (Param1, Param2, Param3, ...);
END;

-- Procedure for select
CREATE PROCEDURE GetRecord (
    IN Param1 DataType
)
LANGUAGE SQLSCRIPT AS
BEGIN
    SELECT Column1, Column2, Column3, ...
    FROM TableName
    WHERE Column1 = Param1;
END;

-- Procedure for update
CREATE PROCEDURE UpdateRecord (
    IN Param1 DataType,
    IN Param2 DataType,
    ...
)
LANGUAGE SQLSCRIPT AS
BEGIN
    UPDATE TableName
    SET Column2 = Param2, ...
    WHERE Column1 = Param1;
END;

-- Procedure for delete
CREATE PROCEDURE DeleteRecord (
    IN Param1 DataType
)
LANGUAGE SQLSCRIPT AS
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
