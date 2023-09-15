import axios from "axios";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import imdb from "../images/imdb.svg";
import tomato from "../images/tomato.svg";

const MovieCard = ({ movie }) => {
	const navigate = useNavigate();
	const API_URL = "https://api.themoviedb.org/3";
	const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";

	const fetchMovie = async () => {
		const { data } = await axios.get(`${API_URL}/movie/${movie.id}`, {
			params: {
				api_key: import.meta.env.VITE_API_KEY,
			},
		});
		if (data) {
			navigate(`/movie/${data.imdb_id}`, {
				state: { movie: data },
			});
		}
		console.log(data);
	};

	const showMoreDetails = () => {
		fetchMovie();
		console.log(movie);
	};

	return (
		<div
			data-testid="movie-card"
			className="font-bold w-full mx-auto max-w-[333px] flex flex-col space-y-2 sm:max-w-none"
		>
			<div className="relative">
				{movie.poster_path ? (
					<div>
						<img
							src={`${IMAGE_PATH}${movie.poster_path}`}
							alt={movie.title}
							data-testid="movie-poster"
							className="w-full"
						/>
					</div>
				) : (
					<div className="bg-slate-200 flex justify-center items-center aspect-[2_/_3]">
						<span>No image found</span>
					</div>
				)}
				<div
					className="absolute w-[30px] h-[30px] rounded-full bg-glassGray backdrop-blur-[1px] top-4 right-4 flex justify-center items-center transition-normal hover:bg-red-400/50 hover:text-red-600 text-lightestGray"
					onClick={() => console.log("fav")}
				>
					<FaHeart size={16} className="mt-[1px]" />
				</div>
			</div>
			<div className="flex items-center justify-between">
				<div
					data-testid="movie-release-date"
					className="text-xs text-darkerLightGray"
				>
					{movie.release_date}
				</div>
				<div className="text-xs text-darkerLightGray">
					USA, 2016 - Current
				</div>
			</div>
			<h3
				onClick={showMoreDetails}
				data-testid="movie-title"
				className="text-lg text-darkestGray page-link"
			>
				{movie.title}
			</h3>
			<div className="flex justify-between font-normal">
				<div className="flex items-center space-x-3 text-sm ">
					<div>
						<img src={imdb} alt="IMDB logo" />
					</div>
					<span>860/100</span>
				</div>
				<div className="flex items-center space-x-3 text-sm ">
					<div>
						<img src={tomato} alt="rotten tomatoes" />
					</div>
					<span>97%</span>
				</div>
			</div>
			<div className="text-xs text-darkerLightGray">
				Action, Adventure, Horror
			</div>
		</div>
	);
};

export default MovieCard;
