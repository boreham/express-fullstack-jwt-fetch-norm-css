import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://kong:secret@192.168.8.166:5432/jwt',
});

export default pool;
