# 🎬 Movie Search App

A beautiful, fully responsive movie search application built with React. Search for movies, view detailed information, and discover your next favorite film!

## ✨ Features

- 🔍 **Movie Search**: Search for movies using the OMDB API
- 📱 **Fully Responsive**: Beautiful design that works on all devices
- 🎨 **Elegant UI**: Modern, professional interface with glassmorphism effects
- 🎭 **Movie Doodles**: Animated movie-related illustrations in the background
- 📄 **Movie Details**: Click on any movie to view comprehensive information
- ⚡ **Fast & Lightweight**: Built with React and optimized for performance
- 🎯 **React Router**: Smooth navigation with React Router DOM
- 🔢 **Pagination**: Navigate through multiple pages of search results
- 🎬 **Type Filtering**: Filter results by type (Movies, Series, Episodes, or All) using API endpoints
- ✅ **Error Handling**: Comprehensive error handling with user-friendly messages
- 📊 **Results Count**: Display total number of results found

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

1. **Navigate to the project directory:**
   ```bash
   cd Movie-Search
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   The app will automatically open at [http://localhost:3000](http://localhost:3000)

### Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## 🎨 Features in Detail

### Search Functionality
- Movie search using the OMDB API
- Displays movie posters, titles, years, and types
- Pagination support for handling large result sets
- Type filtering (Movies, Series, Episodes, or All) using API endpoints
- Results counter showing total matches
- Comprehensive error handling for API failures and edge cases

### Movie Detail Page
- Comprehensive movie information including:
  - Plot summary
  - Director, writer, and cast
  - Ratings (IMDb)
  - Genre tags
  - Awards
  - Box office information
  - Runtime and release date

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Smooth animations and transitions
- Touch-friendly interface

## 🎭 Movie Doodles

The app features beautiful SVG-based movie doodles that float in the background:
- Film strip
- Clapperboard
- Camera
- Popcorn
- Star
- Movie ticket

## 🔧 API Configuration

This app uses the OMDB API (Open Movie Database), which requires an API key.

### Quick Setup:

1. **Get a free API key** from [OMDB API](http://www.omdbapi.com/apikey.aspx) (1,000 requests/day free)

2. **Create a `.env` file** in the root directory:
   ```
   REACT_APP_OMDB_API_KEY=your_api_key_here
   ```

3. **Restart the development server** (`npm start`)

For detailed instructions, see [API_SETUP.md](API_SETUP.md)

## 📁 Project Structure

```
movie-search-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── MovieCard.css
│   │   ├── MovieDoodles.js
│   │   ├── MovieDoodles.css
│   │   ├── SearchBar.js
│   │   └── SearchBar.css
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── MovieDetail.js
│   │   └── MovieDetail.css
│   ├── services/
│   │   └── movieApi.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🛠 Technologies Used

- **React** - UI library
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)
- **OMDB API** - Movie data

## 📝 License

This project is open source and available under the MIT License.

## 💝 Credits

- Movie data provided by [OMDB API](http://www.omdbapi.com/)
- Icons and illustrations created with SVG
- Font: [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts

---

Made with ❤️ for movie lovers
