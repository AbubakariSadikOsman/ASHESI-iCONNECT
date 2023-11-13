
import { pool } from '../config/postgres';

// Function for querying
const query = async (text: string, params: any[] = []) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('Query executed in', duration, 'ms');
  return res;
};

export { query };
