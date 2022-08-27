import "dotenv/config";
import pg from "pg";

const { Pool } = pg;
const env = process.env.NODE_ENV;

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString:
    env === "test" ? process.env.PG_TEST_URI : process.env.PG_URI,
});

const model = {
  query: (text: any, params?: any, callback?: any) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

export default model;
