/* Replace with your SQL commands */
-- Step 1: Create the ENUM type
CREATE TYPE customer_roles AS ENUM ('Admin', 'User');

-- Step 2: Add the column to the table using the ENUM type
ALTER TABLE customer 
ADD COLUMN IF NOT EXISTS role customer_roles;
