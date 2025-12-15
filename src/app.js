import express from "express";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

app.use(express.json());

// rota de teste
app.get("/health", (req, res) => {
    res.json({
        status: "API rodando" 
    })
});

app.use(movieRoutes);

export default app;