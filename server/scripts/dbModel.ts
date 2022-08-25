import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: process.env.PG_URI,
});

const model = {
  query: (text: any, params?: any, callback?: any) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

export default model;
