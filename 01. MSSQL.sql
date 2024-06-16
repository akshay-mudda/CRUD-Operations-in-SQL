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
CREATE PROCEDURE InsertRecord
    @Param1 DataType,
    @Param2 DataType,
    @Param3 DataType,
    ...
AS
BEGIN
    INSERT INTO TableName (Column1, Column2, Column3, ...)
    VALUES (@Param1, @Param2, @Param3, ...);
END;

-- Stored procedure for select
CREATE PROCEDURE GetRecord
    @Param1 DataType
AS
BEGIN
    SELECT Column1, Column2, Column3, ...
    FROM TableName
    WHERE Column1 = @Param1;
END;

-- Stored procedure for update
CREATE PROCEDURE UpdateRecord
    @Param1 DataType,
    @Param2 DataType,
    ...
AS
BEGIN
    UPDATE TableName
    SET Column2 = @Param2, ...
    WHERE Column1 = @Param1;
END;

-- Stored procedure for delete
CREATE PROCEDURE DeleteRecord
    @Param1 DataType
AS
BEGIN
    DELETE FROM TableName
    WHERE Column1 = @Param1;
END;

-- Call to insert a record
EXEC InsertRecord @Param1 = Value1, @Param2 = Value2, @Param3 = Value3, ...;

-- Call to select a record
EXEC GetRecord @Param1 = Value1;

-- Call to update a record
EXEC UpdateRecord @Param1 = Value1, @Param2 = Value2, ...;

-- Call to delete a record
EXEC DeleteRecord @Param1 = Value1;
