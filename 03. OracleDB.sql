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
CREATE OR REPLACE PROCEDURE InsertRecord (
    Param1 IN DataType,
    Param2 IN DataType,
    Param3 IN DataType,
    ...
)
IS
BEGIN
    INSERT INTO TableName (Column1, Column2, Column3, ...)
    VALUES (Param1, Param2, Param3, ...);
END;
/

-- Stored procedure for select
CREATE OR REPLACE PROCEDURE GetRecord (
    Param1 IN DataType,
    ResultCursor OUT SYS_REFCURSOR
)
IS
BEGIN
    OPEN ResultCursor FOR
    SELECT Column1, Column2, Column3, ...
    FROM TableName
    WHERE Column1 = Param1;
END;
/

-- Stored procedure for update
CREATE OR REPLACE PROCEDURE UpdateRecord (
    Param1 IN DataType,
    Param2 IN DataType,
    ...
)
IS
BEGIN
    UPDATE TableName
    SET Column2 = Param2, ...
    WHERE Column1 = Param1;
END;
/

-- Stored procedure for delete
CREATE OR REPLACE PROCEDURE DeleteRecord (
    Param1 IN DataType
)
IS
BEGIN
    DELETE FROM TableName
    WHERE Column1 = Param1;
END;
/

-- Call to insert a record
BEGIN
    InsertRecord(Param1, Param2, Param3, ...);
END;
/

-- Call to select a record
DECLARE
    ResultCursor SYS_REFCURSOR;
BEGIN
    GetRecord(Param1, ResultCursor);
    -- Process ResultCursor as needed
END;
/

-- Call to update a record
BEGIN
    UpdateRecord(Param1, Param2, ...);
END;
/

-- Call to delete a record
BEGIN
    DeleteRecord(Param1);
END;
/
