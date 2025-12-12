import { pool } from "./config/db.js";

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("🟢 Conectado ao PostgreSQL com sucesso!");
    console.log("Hora do servidor:", result.rows[0].now);

  } catch (error) {
    console.error("🔴 Erro ao conectar no banco:");
    console.error(error);
  } finally {
    pool.end(); // encerra a conexão
  }
}

testConnection();
