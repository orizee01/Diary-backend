/* Replace with your SQL commands */

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE customer(
 id VARCHAR PRIMARY KEY DEFAULT 'customer-' || LOWER(
        REPLACE(
            CAST(uuid_generate_v1mc() As varchar(50))
            , '-','')
 ),
  name VARCHAR (50) NOT NULL,
  email VARCHAR (50) UNIQUE,
  password VARCHAR (100),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

