# 🎬 Movie Database

A modern, responsive movie database application built with React that allows users to discover, search, and save their favorite movies.

## ✨ Features

- **Browse Movies**: Explore popular, top-rated, and upcoming movies
- **Search Functionality**: Search for movies by title
- **Advanced Filters**: Filter by genre, release year, and sort by popularity/rating
- **Favorites System**: Save your favorite movies (persisted in localStorage)
- **Movie Details**: View detailed information about each movie
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Data**: Fetches live data from The Movie Database (TMDB) API

## 🚀 Demo

[Add your live demo link here]

## 📸 Screenshots

![Screenshot](screenshot.png)


## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **TMDB API** - The Movie Database API for movie data
- **CSS3** - Modern styling with gradients and animations
- **LocalStorage** - Client-side storage for favorites

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- A TMDB API key (free at https://www.themoviedb.org/settings/api)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movie-database.git
   cd movie-database
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎯 Usage

### Browsing Movies
- Click on the tabs (Popular, Top Rated, Upcoming) to view different movie categories
- Scroll through the grid of movie cards

### Searching
- Use the search bar to find specific movies by title
- Results update as you type

### Filtering
- Select a genre from the dropdown to filter movies
- Choose a year to see movies from specific time periods
- Sort by popularity, rating, or release date

### Favorites
- Click the heart icon (♡) on any movie card to add it to favorites
- Click again (♥) to remove from favorites
- Access all favorites through the "Favorites" tab
- Favorites are saved locally and persist across sessions

### Movie Details
- Click on any movie card to view detailed information
- See overview, cast, genres, runtime, and more

## 📁 Project Structure

```
movie-database/
├── src/
|   ├── api_calls/
|   |   ├──popularMovies.js
|   |
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Filters.jsx
│   │   ├── Tabs.jsx
│   │   ├── MovieModal.jsx
│   │   └── Pagination.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── public/
├── .env
├── package.json
└── README.md
```

## 🔑 Getting Your TMDB API Key

1. Go to https://www.themoviedb.org/
2. Create a free account
3. Navigate to Settings → API
4. Request an API key (Developer)
5. Fill out the form (you can use personal/educational for learning projects)
6. Copy your API key and add it to your `.env` file

## 🌐 API Endpoints Used

- **Popular Movies**: `/movie/popular`
- **Top Rated**: `/movie/top_rated`
- **Upcoming**: `/movie/upcoming`
- **Search**: `/search/movie`
- **Movie Details**: `/movie/{movie_id}`
- **Genres**: `/genre/movie/list`

## 🎨 Component Breakdown

### MovieCard
Displays individual movie information including poster, title, rating, and favorite button.

### MovieGrid
Container component that renders multiple MovieCard components in a responsive grid.

### SearchBar
Handles movie search functionality with real-time input.

### Filters
Provides genre, year, and sorting options for filtering movies.

### Tabs
Navigation component for switching between different movie categories.

### MovieModal
Displays detailed information about a selected movie.

### Pagination
Handles navigation between pages of movie results.

## 💡 Key Learning Concepts

This project demonstrates:
- **Component-based architecture** - Breaking UI into reusable components
- **State management** - Using useState for component state
- **Side effects** - Using useEffect for API calls and localStorage
- **Props drilling** - Passing data between parent and child components
- **Event handling** - Managing user interactions
- **Conditional rendering** - Showing different UI based on state
- **API integration** - Fetching and displaying external data
- **Local storage** - Persisting data across sessions

## 🐛 Known Issues

- [List any known bugs or limitations here]

## 🚧 Future Enhancements

- [ ] Add movie trailers/videos
- [ ] Implement user authentication
- [ ] Add movie recommendations
- [ ] Create watchlist feature
- [ ] Add dark/light theme toggle
- [ ] Implement infinite scroll
- [ ] Add movie reviews and ratings
- [ ] Social sharing features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

- GitHub: [@suborno251](https://github.com/suborno251)
- LinkedIn: [Suborno Das](https://www.linkedin.com/in/suborno-das-9220b51a0/)

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- [React Documentation](https://react.dev/) for excellent learning resources
- Icons and inspiration from various sources

## 📞 Support

If you have any questions or need help, feel free to open an issue or contact me directly.

---

⭐ If you found this project helpful, please consider giving it a star!

**Happy Coding! 🎉**
