import { Pool } from 'pg';

interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

const databaseConfig: DatabaseConfig = {
  host: process.env.DB_HOST || '',
  port: parseInt(process.env.DB_PORT || '', 10),
  database: process.env.DB_NAME || '',
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
};

const pool = new Pool(databaseConfig);

export { pool };
