import { Router } from "express";
import { procurarFilme } from "../services/tmdbService.js";

const router = Router();

router.get("/movies/search/:name", async (req, res) => {
    try {
        const { name } = req.params;

        const data = await procurarFilme(name);

        res.json(data);

    }catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;


