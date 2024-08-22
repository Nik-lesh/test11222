import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_RESTRAUNT,
  //   password: process.env.DB_PASSWORD,
  port: 1234,
});


export default pool;
