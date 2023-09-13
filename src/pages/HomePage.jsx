import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import SignIn from "../components/SignIn";
import SearchBar from "../components/SearchBar";
import MovieDetails from "../components/MovieDetails";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import poster from "../images/poster.png";
import axios from "axios";

// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=0e475de5e9056c4d6dfc09841688b85e

const API_URL = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState({});
	const [moviesListHeading, setMovieListHeading] = useState("Featured Movie");

	const fetchMovies = async () => {
		const {
			data: { results },
		} = await axios.get(`${API_URL}/movie/popular?language=en-US&page=1`, {
			params: {
				api_key: import.meta.env.VITE_API_KEY,
			},
		});
		const featured = results.slice(0, 10);
		setMovies(featured);
		setSelectedMovie(featured[0]);
		console.log(featured);
	};

	useEffect(() => {
		fetchMovies();
	}, []);
	return (
		<main className="font-dmSans">
			{/* hero */}
			<section
				className="relative flex flex-col h-screen bg-center bg-no-repeat bg-cover bg-slate-400"
				style={{
					backgroundImage: `url(${IMAGE_PATH}${selectedMovie.backdrop_path})`,
				}}
			>
				<div className="absolute inset-0 bg-black/30 z-0"></div>
				<header className="relative z-10 px-4 pt-4 md:px-8 md:pt-5 lg:pt-6 xl:px-12">
					<div className="container grid grid-cols-2 grid-rows-2 gap-4 mx-auto lg:flex lg:justify-between lg:gap-0 lg:items-center md:gap-5">
						<Logo />
						<SignIn />
						<SearchBar />
					</div>
				</header>
				<MovieDetails selectedMovie={selectedMovie} />
			</section>
			<MovieList movies={movies} heading={moviesListHeading} />
			<Footer />
		</main>
	);
};

export default HomePage;
