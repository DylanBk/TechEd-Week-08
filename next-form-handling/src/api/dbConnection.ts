import pg from 'pg';

const db = new pg.Pool({
    connectionString: process.env.NEXT_SUPABASE_URI
});

console.log(db)

export default db;