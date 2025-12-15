import { pool } from "../config/db.js";
import { procurarFilme } from "../services/tmdbService.js";

export async function fetchSalvarFilme(req, res){
    try {
        const { name } = req.params;

        const data = await procurarFilme(name);

        if (!data.results.length) {
            return res.status(404).json({ message: "Filme não encontrado" });
        }

        const movie = data.results[0];

        await pool.query(
            `INSERT INTO movies (title, description, release_date, rating,  poster_path)
            VALUES ($1, $2, $3, $4, $5)`,
            [
                movie.title,
                movie.overview,
                movie.release_date,
                movie.vote_average,
                movie.poster_path,
            ]
        );

        res.json({ message: "Filme salvo com sucesso", movie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao salvar filme"});
    }
}

export async function listarFilmes(req, res) {
    try {
        const result = await pool.query(
            "SELECT * FROM movies ORDER BY created_at DESC"
        );
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar filmes"});
    }
}