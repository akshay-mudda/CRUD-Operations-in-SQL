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

-- PostgreSQL Stored Procedures (Functions)

--Create Function for Insert Operation
CREATE OR REPLACE FUNCTION InsertRecord(
    Param1 DataType,
    Param2 DataType,
    Param3 DataType,
    ...
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO TableName (Column1, Column2, Column3, ...)
    VALUES (Param1, Param2, Param3, ...);
END;
$$ LANGUAGE plpgsql;

--Create Function for Select Operation
CREATE OR REPLACE FUNCTION GetRecord(
    Param1 DataType
)
RETURNS TABLE(Column1 DataType, Column2 DataType, Column3 DataType, ...) AS $$
BEGIN
    RETURN QUERY
    SELECT Column1, Column2, Column3, ...
    FROM TableName
    WHERE Column1 = Param1;
END;
$$ LANGUAGE plpgsql;

--Create Function for Update Operation
CREATE OR REPLACE FUNCTION UpdateRecord(
    Param1 DataType,
    Param2 DataType,
    ...
)
RETURNS VOID AS $$
BEGIN
    UPDATE TableName
    SET Column2 = Param2, ...
    WHERE Column1 = Param1;
END;
$$ LANGUAGE plpgsql;

--Create Function for Delete Operation
CREATE OR REPLACE FUNCTION DeleteRecord(
    Param1 DataType
)
RETURNS VOID AS $$
BEGIN
    DELETE FROM TableName
    WHERE Column1 = Param1;
END;
$$ LANGUAGE plpgsql;

--Using the Functions

--Call to Insert a Record
SELECT InsertRecord(Value1, Value2, Value3, ...);

--Call to Select a Record
SELECT * FROM GetRecord(Value1);

--Call to Update a Record
SELECT UpdateRecord(Value1, Value2, ...);

--Call to Delete a Record
SELECT DeleteRecord(Value1);
