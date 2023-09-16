# Movie Box - A Movie Discovery Web Application

Welcome to Movie Box, a movie discovery web application! Movie Box allows users to search for movies, view detailed information about them, and save their favorite movies for later. This README will guide you through the steps to run the project locally on your system..



## Prerequisites

Before you begin, make sure you have the following installed on your system:

[Node.js](https://nodejs.org/en): Make sure you have Node.js installed. You can download it [here](https://nodejs.org/en).

## CGetting Started

Clone the repository to your local machine:

```bash
git clone https://github.com/ebukathedev/movie-box.git
```

Change into the project directory:

```bash
  cd movie-box
```

Install project dependencies using npm:

```bash
  npm install
```

## Configuration

To fetch movie data, Movie Box uses the TMDB API. To access this API, you need to obtain an API key.

- Visit the [TMDB](https://www.themoviedb.org/documentation/api) website and create an account.

- After creating an account, log in, and go to the [API section](https://www.themoviedb.org/settings/api) to request an API key.

- Once you have your API key, create a `.env` file in the project root directory:

```bash
  touch .env
```

- Open the .env file in a text editor and add your TMDB API key:
```bash
  VITE_API_KEY = your-api-key-here
```

- Replace `your-api-key-here` with the API key you obtained from TMDB


## Running the Application

After completing the setup steps, you can run Movie Box on your local machine.


Start the development server:

```bash
  npm run dev
```

The application should now be running at <http://localhost:5173>

