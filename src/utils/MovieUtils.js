const API_KEY = '3f3798b4fab8a9e67c465bd2347d06a6';

export function getMoviesPath() {
    return `https://api.themoviedb.org/3/movie/283995/similar?api_key=${API_KEY}&language=en-US&page=1`
}

export function getPosterPath(movie) {
    return `https://image.tmdb.org/t/p/w154/${movie.poster_path}`
}

export function getMoviePath(id) {

    return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
}