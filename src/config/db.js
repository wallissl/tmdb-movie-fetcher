import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})

/* pool
  .query("SELECT NOW()")
  .then(res => {
    console.log("PostgreSQL conectado! Hora atual:", res.rows[0].now);
  })
  .catch(err => {
    console.error("Erro ao conectar no PostgreSQL:", err);
  }); */