import MovieCard from "./MovieCard";

export default function MovieGrid({ popularMovies, favorites, onToggleFavorite }) {

    if (!popularMovies) return null;

    return (
        <div className="movies-grid">
            {popularMovies.map(movie => (
                <MovieCard 
                    {...movie}
                    key={movie.id}
                    isFavorite={favorites.includes(movie.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    )
}