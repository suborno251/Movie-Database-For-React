import { useState } from "react"

export default function Search({ onSearch, selectedGenre, selectedSort, selectedYear, setSelectedGenre, setSelectedSort, setSelectedYear }) {

    const [input, setInput] = useState('')

    const genres = {
        "": "All Genres",
        28: "Action",
        35: "Comedy",
        18: "Drama",
        27: "Horror",
        10749: "Romance",
        878: "Sci-Fi",
    }

    const sortOptions = {
        "popularity.desc": "Most Popular",
        "vote_average.desc": "Highest Rated",
        "release_date.desc": "Latest Release"
    }
    function handleSearch(e) {
        e.preventDefault()
        if (input === "") {
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
            <select value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
                {Object.entries(genres).map(([id, name]) => (
                    <option key={id} value={id}>{name}</option>
                ))}
            </select>
            <select value={selectedSort} onChange={e => setSelectedSort(e.target.value)}>
                {Object.entries(sortOptions).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
            <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
                <option value="">All Years</option>
                {[2024, 2023, 2022, 2021].map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
    </form>
}