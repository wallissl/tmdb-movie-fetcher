import { Router } from "express";
import { fetchSalvarFilme, listarFilmes } from "../controllers/movieController.js";

const router = Router();

router.get("/movies/save/:name", fetchSalvarFilme);
router.get("/movies", listarFilmes);

export default router;


