/* Replace with your SQL commands */

CREATE TABLE diary (
id VARCHAR PRIMARY KEY DEFAULT 'diary-' || LOWER(
        REPLACE(
            CAST(uuid_generate_v1mc() As varchar(50))
            , '-','')
    ),
  name VARCHAR(50) NOT NULL,
  customer VARCHAR(200) NOT NULL REFERENCES customer(id) ON DELETE CASCADE,
  description TEXT,
  content TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);