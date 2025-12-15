import { Router } from "express";
/* import { procurarFilme } from "../services/tmdbService.js";
 */import { fetchSalvarFilme, listarFilmes } from "../controllers/movieController.js";

const router = Router();

/* router.get("/movies/search/:name", async (req, res) => {
    try {
        const { name } = req.params;

        const data = await procurarFilme(name);

        res.json(data);

    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}); */

router.get("/movies/save/:name", fetchSalvarFilme);
router.get("/movies", listarFilmes);

export default router;


