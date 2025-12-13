import MovieCard from "./MovieCard";

export default function MovieGrid({ Movies, favorites, onToggleFavorite }) {

    if (!Movies) return null;

    // console.log(Movies)
    return (
        <div className="movies-grid">
            {Movies.map(movie => (
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