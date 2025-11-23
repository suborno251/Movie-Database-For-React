import './style.css'
import MovieGrid from './MovieGrid.jsx'
import GetMovies from './api_calls/popularMovies.js'
import { useEffect, useState } from 'react'

export default function App() {


    const [popularMovies, setPopularMovies] = useState([])
    const [favorites, setFavorites] = useState(() => {
        // Load favorites from localStorage on initial render
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        async function fetchData() {
            const data = await GetMovies('/3/movie/popular')
            setPopularMovies(data)
        }
        fetchData()
    }, [])

    useEffect(()=>{
      localStorage.setItem('favourites',JSON.stringify(favorites))
    }, [favorites])

    function toggleFavorite(movieId) {
        setFavorites(currentFavorites => {
            if (currentFavorites.includes(movieId)) {
                // Remove from favorites
                return currentFavorites.filter(id => id !== movieId);
            } else {
                // Add to favorites
                return [...currentFavorites, movieId];
            }
        });
    }

  return (
    <>
      <div className="container">
        <header>
          <h1>🎬 Movie Database</h1>
          <p>Discover your next favorite movie</p>
        </header>

        {/* search */}
        <div className="search-section">
          <div className="search-bar">
            <input type="text" placeholder="Search for movies..." id="searchInput" />
            <button>Search</button>
          </div>
          <div className="filters">
            <select>
              <option value="">All Genres</option>
              <option value="28">Action</option>
              <option value="35">Comedy</option>
              <option value="18">Drama</option>
              <option value="27">Horror</option>
              <option value="10749">Romance</option>
              <option value="878">Sci-Fi</option>
            </select>
            <select>
              <option value="popularity.desc">Most Popular</option>
              <option value="vote_average.desc">Highest Rated</option>
              <option value="release_date.desc">Latest Release</option>
            </select>
            <select>
              <option value="">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>

        {/* tabs */}
        <div className="tabs">
          <button className="tab active">Popular</button>
          <button className="tab">Top Rated</button>
          <button className="tab">Upcoming</button>
          <button className="tab">Favorites</button>
        </div>

        {/* movie grid */}
        
        <MovieGrid 
                popularMovies={popularMovies} 
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
            />
        
        {/* <div className="movies-grid">
          <MovieGrid />
        </div> */}

        {/* pagination */}
        <div className="pagination">
          <button disabled>Previous</button>
          <span className="page-number">Page 1 of 500</span>
          <button>Next</button>
        </div>

        {/* loading state - (Hidden by default) */}
        <div className="loading" style={{ display: 'none' }}>
          Loading movies...
        </div>

        {/* Error State (hidden by default) */}
        <div className="error" style={{ display: 'none' }}>
          <h2>Oops! Something went wrong</h2>
          <p>Please try again later</p>
        </div>

        {/* Empty State (hidden by default) */}
        <div className="empty-state" style={{ display: 'none' }}>
          <h2>No movies found</h2>
          <p>Try adjusting your search or filters</p>
        </div>
      </div>
      <div className="modal">
        <div className="modal-content">
          <button className="modal-close">×</button>
          <div className="modal-header">
            <img src={null} alt="Movie backdrop"/>
          </div>
          <div className="modal-body">
            <h2 className="modal-title">Movie Title Here</h2>
            <div className="modal-meta">
              <span><strong>⭐ Rating:</strong> 8.5/10</span>
              <span><strong>📅 Release:</strong> 2024</span>
              <span><strong>⏱️ Runtime:</strong> 142 min</span>
            </div>
            <div className="modal-section">
              <h3>Overview</h3>
              <p className="modal-overview">
                This is where the movie overview/description will appear. It gives a brief summary of the plot without spoiling too much.
              </p>
            </div>
            <div className="modal-section">
              <h3>Genres</h3>
              <p>Action, Adventure, Sci-Fi</p>
            </div>
            <div className="modal-section">
              <h3>Cast</h3>
              <p>Actor 1, Actor 2, Actor 3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}