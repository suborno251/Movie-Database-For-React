import { useState } from "react"

export default function Search({ onSearch }) {

    const [input, setInput] = useState('')

    function handleSearch(e) {
        e.preventDefault()
        if (input === ""){
            onSearch("")
            return
        } 
        onSearch(input)
        setInput("")
    }
    return <form onSubmit={handleSearch} className="search-section">
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for movies..."
                id="searchInput"
                onChange={e => setInput(e.target.value)}
            />
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
    </form>
}