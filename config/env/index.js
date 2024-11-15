/* eslint-disable no-bitwise */
const {
  DARIES_NODE_ENV,
  DARIES_DB_URL,
  DARIES_TEST_DB_URL
} = process.env;

export default {
  DATABASE_URL: DARIES_NODE_ENV === 'test' ? DARIES_TEST_DB_URL : DARIES_DB_URL,
};
