import MovieCard from "./MovieCard";

export default function MovieGrid({ popularMovies, favorites, onToggleFavorite }) {

    if (!popularMovies) return null;

    console.log(popularMovies)
    return (
        <div className="movies-grid">
            {popularMovies.map(movie => (
                <MovieCard
                    key={movie.id}
                    {...movie}
                    isFavorite={favorites.includes(movie.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    )
}