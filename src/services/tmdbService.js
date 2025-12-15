import dotenv from "dotenv";
dotenv.config();

export async function procurarFilme(nomeDoFilme) {
    const apiKey = process.env.TMDB_KEY;
   
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        nomeDoFilme
    )}&api_key=${apiKey}&language=pt-BR`;

    const response = await fetch(url);

    if (!response.ok){
        throw new WebTransportError("Erro ao acessar a API da TMBD");
    }

    const data = await response.json();

    return data;
}