export default function MovieCard({ id, poster_path, title, vote_average, release_date, isFavorite, onToggleFavorite }) {

    return (
        <div className="movie-card" key={id}>
            <div className="movie-poster">
                {poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        alt={title}
                    />
                ) : (
                    <span>No Image</span>
                )}
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{title}</h3>
                <div className="movie-meta">
                    <span className="rating">⭐ {vote_average.toFixed(1)}</span>
                    <span>{release_date?.split('-')[0] || 'N/A'}</span>
                    <button 
                        className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent card click if you add modal later
                            onToggleFavorite(id);
                        }}
                    >
                        {isFavorite ? '♥' : '♡'}
                    </button>
                </div>
            </div>
        </div>
    )
}