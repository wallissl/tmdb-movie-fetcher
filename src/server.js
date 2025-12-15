/* import express from "express";
import cors from "cors";
import router from "./routes/routes.js"; */

import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

/* const app = express();

app.use(cors());
app.use(express.json());

//rotas
app.use("/api", router); */

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});