# Dev Movie 🎬

A **Netflix-style movie search app** built with **React** and **Vite**, using the **OMDb API**.  
Users can search for movies, view movie posters, and see basic movie details in a **responsive grid layout**.

The app is designed to be **mobile-friendly** and uses **React components, state, and API integration** for practice.

---

## Demo

Live demo: [Netlify](https://ruhul-dev-movie.netlify.app/)

---

## Features

- Search movies by title
- Display results in **responsive grid**:
  - Desktop: 3 cards per row
  - Tablet: 2 cards per row
  - Mobile: 1 card per row
- Movie cards show: poster, title, year
- Handles `"N/A"` posters with placeholder images
- Loading spinner when fetching movies
- Error messages for movies not found or API errors

---

## Tech Stack

- **React** (functional components)
- **Vite** (fast development environment)
- **OMDb API** (movie database)
- **CSS Grid & Flexbox** for responsive layout
- **Environment Variables** (`.env`) to store API key

---

## Project Structure

src/
├── components/
│ ├── MovieCard.jsx
│ ├── MovieList.jsx
│ └── SearchBar.jsx
├── services/
│ └── api.js // API fetch functions
├── App.jsx
├── main.jsx
└── App.css
.env // VITE_OMDB_API_KEY=your_api_key

---

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/devruhul/dev-movie
cd dev-movie

Install dependencies:

npm install

Create a .env file in the project root:

VITE_OMDB_API_KEY=your_api_key_here

Start the development server:

npm run dev

Open your browser at http://localhost:5173

How to Use

Type a movie name in the search bar

Click Search Movies

Browse the results in a responsive grid

If the poster is missing, a placeholder image will be shown

Screenshots
<img src="/assets/mobile.png" width="960px" height="469px" alt="mobile" />
<img src="/assets/tablet.png" width="960px" height="469px" alt="tablet" />
<img src="/assets/desktop.png" width="960px" height="469px" alt="desktop" />




Future Improvements

Add movie details page with plot, actors, and ratings

Add filter by year or type

Add pagination for OMDb results

Implement debounced search

Add dark/light mode toggle

License

This project is open-source and free to use.

Author

Ruhul Amin
GitHub
Portfolio
```
